let Kefir = require('kefir');
let eventStream;
let publishEmitter;
let directory;

let SubscriptionDefinition = function(stream, callback, onError) {
  this.stream = stream;
  this.onUnsubscribe = null;
  this.subscription = stream.observe({ value: function(ev) {callback(ev.data, ev);}, error: onError });
  pegStream(stream);
};

SubscriptionDefinition.prototype.unsubscribe = function() {
  if(typeof this.onUnsubscribe === 'function') {
    this.onUnsubscribe();
  }

  this.subscription.unsubscribe();
  unpegStream(this.stream);
};

function pegStream(stream) {
  stream.subscriberCount = stream.subscriberCount ? stream.subscriberCount + 1 : 1;
}

function unpegStream(stream) {
  if(!--stream.subscriberCount) {
    delete directory[stream._source._channelName].topics[stream._binding];
  }
}

function topicRegex(topic) {
  let prevSegment;
  let pattern = '^' + topic.split('.').map(function mapTopicBinding(segment) {
      let res = '';
      if(!!prevSegment) {
        res = prevSegment !== '#' ? '\\.\\b' : '\\b';
      }
      if(segment === '#') {
        res += '[\\s\\S]*';
      } else if(segment === '*') {
        res += '[^.]+';
      } else {
        res += segment;
      }
      prevSegment = segment;
      return res;
    }).join('') + '$';
  return new RegExp(pattern);
}

function topicComparator(binding) {
  if(binding.indexOf('#') === -1 && binding.indexOf('*') === -1) {
    return (function(ev) { return ev.topic === binding; });
  }
  else {
    let rgx = topicRegex(binding);
    return (function(ev) { return rgx.test(ev.topic); });
  }
}

function getChannel(name) {
  if(!directory[name]) {
    directory[name] = {
      stream: eventStream.filter(function(ev) { return ev.channel === name; }),
      topics: {}
    };
    directory[name].stream._channelName = name;
  }
  return directory[name];
}

function getTopicStream(channelName, binding) {
  let channel = getChannel(channelName);
  let cmp = topicComparator(binding);
  let stream = channel.topics[binding] || (channel.topics[binding] = channel.stream.filter(function(ev) { return cmp(ev); }));
  stream._binding = binding;
  return stream;
}

function publish(event) {
  event.timestamp = new Date().toISOString();
  publishEmitter && publishEmitter.emit(event);
}

function subscribe(def) {
  return new SubscriptionDefinition(getTopicStream(def.channel, def.topic), def.callback);
}

function addWireTap(callback) {
  let subscription = eventStream.observe({ value: function(ev) { callback(ev.data, ev); } });
  return function() { subscription.unsubscribe() };
}

function reset() {
  directory = {};
  publishEmitter && publishEmitter.end();
  publishEmitter = null;
  eventStream = Kefir.stream(function(emitter) {
    publishEmitter = emitter;
    return function() { publishEmitter = null; };
  });
}

function when(defs, onSuccess, onError, options) {
  let streams = [];
  let _options = options || {};
  defs.forEach(function(def) {
    let stream = getTopicStream(def.channel, def.topic);
    pegStream(stream);
    streams.push(stream);
  });
  let aligned = Kefir.zip(streams);
  let limited = _options.once ? aligned.take(1) : aligned;
  let stripped = limited.map(function(data) { return data.map(function(el) { return el.data; }); });
  let observer = stripped.observe({ value: function(data) { onSuccess.apply(this, data); }, error: onError, end: dispose });

  function dispose() {
    observer.unsubscribe();
    streams.forEach(function(stream) {
      unpegStream(stream);
    });
    streams = [];
  }

  return dispose;
}

reset();

module.exports = {
  publish: publish,
  subscribe: subscribe,
  addWireTap: addWireTap,
  reset: reset,
  when: when
};
