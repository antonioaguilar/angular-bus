/**
 * @license
 * lodash (Custom Build) /license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){return n.push.apply(n,t),n}function t(n){return function(t){return null==t?Z:t[n]}}function r(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function e(n,t){return d(t,function(t){return n[t]})}function u(n){return n instanceof o?n:new o(n)}function o(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function i(n,t,r,e){return n===Z||J(n,an[r])&&!ln.call(e,r)?t:n}function c(n){return V(n)?vn(n):{}}function f(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");
  return setTimeout(function(){n.apply(Z,r)},t)}function a(n,t){var r=true;return jn(n,function(n,e,u){return r=!!t(n,e,u)}),r}function l(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===Z?i===i:r(i,c)))var c=i,f=o}return f}function p(n,t){var r=[];return jn(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function s(t,r,e,u,o){var i=-1,c=t.length;for(e||(e=D),o||(o=[]);++i<c;){var f=t[i];0<r&&e(f)?1<r?s(f,r-1,e,u,o):n(o,f):u||(o[o.length]=f)}return o}function h(n,t){return n&&dn(n,t,Rn);
}function v(n,t){return p(t,function(t){return U(n[t])})}function b(n,t){return n>t}function y(n,t,r,e,u){return n===t||(null==n||null==t||!V(n)&&!H(t)?n!==n&&t!==t:g(n,t,y,r,e,u))}function g(n,t,r,e,u,o){var i=wn(n),c=wn(t),f="[object Array]",a="[object Array]";i||(f=sn.call(n),f="[object Arguments]"==f?"[object Object]":f),c||(a=sn.call(t),a="[object Arguments]"==a?"[object Object]":a);var l="[object Object]"==f&&true,c="[object Object]"==a&&true,a=f==a;o||(o=[]);var p=On(o,function(t){return t[0]==n;
}),s=On(o,function(n){return n[0]==t});if(p&&s)return p[1]==t;if(o.push([n,t]),o.push([t,n]),a&&!l){if(i)r=B(n,t,r,e,u,o);else n:{switch(f){case"[object Boolean]":case"[object Date]":case"[object Number]":r=J(+n,+t);break n;case"[object Error]":r=n.name==t.name&&n.message==t.message;break n;case"[object RegExp]":case"[object String]":r=n==t+"";break n}r=false}return o.pop(),r}return 2&u||(i=l&&ln.call(n,"__wrapped__"),f=c&&ln.call(t,"__wrapped__"),!i&&!f)?!!a&&(r=R(n,t,r,e,u,o),o.pop(),r):(i=i?n.value():n,
  f=f?t.value():t,r=r(i,f,e,u,o),o.pop(),r)}function _(n){return typeof n=="function"?n:null==n?X:(typeof n=="object"?m:t)(n)}function j(n,t){return n<t}function d(n,t){var r=-1,e=P(n)?Array(n.length):[];return jn(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function m(n){var t=gn(n);return function(r){var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&y(n[u],r[u],Z,3)))return false}return true}}function O(n,t){return n=Object(n),C(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function x(n){
  var t;return t=_n(t===Z?n.length-1:t,0),function(){for(var r=arguments,e=-1,u=_n(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];for(e=-1,u=Array(t+1);++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function A(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function E(n){return A(n,0,n.length)}function w(n,t){var r;return jn(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function k(t,r){return C(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args));
},t)}function N(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):Z,f=r,a=i,i=c===Z?n[i]:c,c=f[a];ln.call(f,a)&&J(c,i)&&(i!==Z||a in f)||(f[a]=i)}return r}function S(n){return x(function(t,r){var e=-1,u=r.length,o=1<u?r[u-1]:Z,o=3<n.length&&typeof o=="function"?(u--,o):Z;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function T(n){return function(){var t=arguments,r=c(n.prototype),t=n.apply(r,t);return V(t)?t:r}}function F(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==un&&this instanceof e?u:n;++c<f;)a[c]=r[c];
  for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=T(n);return e}function B(n,t,r,e,u,o){var i=n.length,c=t.length;if(i!=c&&!(2&u&&c>i))return false;for(var c=-1,f=true,a=1&u?[]:Z;++c<i;){var l=n[c],p=t[c];if(void 0!==Z){f=false;break}if(a){if(!w(t,function(n,t){if(!$(a,t)&&(l===n||r(l,n,e,u,o)))return a.push(t)})){f=false;break}}else if(l!==p&&!r(l,p,e,u,o)){f=false;break}}return f}function R(n,t,r,e,u,o){var i=2&u,c=Rn(n),f=c.length,a=Rn(t).length;
  if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:ln.call(t,p)))return false}for(a=true;++l<f;){var p=c[l],s=n[p],h=t[p];if(void 0!==Z||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function D(n){return wn(n)||M(n)}function I(n){var t=[];if(null!=n)for(var r in Object(n))t.push(r);return t}function q(n){
  return n&&n.length?n[0]:Z}function $(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?_n(e+r,0):r:0,r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1}function z(n,t){return jn(n,_(t))}function C(n,t,e){return r(n,_(t),e,3>arguments.length,jn)}function G(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=kn(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=Z),r}}function J(n,t){return n===t||n!==n&&t!==t}function M(n){
  return H(n)&&P(n)&&ln.call(n,"callee")&&(!bn.call(n,"callee")||"[object Arguments]"==sn.call(n))}function P(n){var t;return(t=null!=n)&&(t=n.length,t=typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t),t&&!U(n)}function U(n){return n=V(n)?sn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function V(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function H(n){return!!n&&typeof n=="object"}function K(n){return typeof n=="number"||H(n)&&"[object Number]"==sn.call(n)}
  function L(n){return typeof n=="string"||!wn(n)&&H(n)&&"[object String]"==sn.call(n)}function Q(n){return typeof n=="string"?n:null==n?"":n+""}function W(n){return n?e(n,Rn(n)):[]}function X(n){return n}function Y(t,r,e){var u=Rn(r),o=v(r,u);null!=e||V(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=v(r,Rn(r)));var i=!(V(e)&&"chain"in e&&!e.chain),c=U(t);return jn(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=E(this.__actions__)).push({
    func:u,args:arguments,thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var Z,nn=1/0,tn=/[&<>"'`]/g,rn=RegExp(tn.source),en=typeof self=="object"&&self&&self.Object===Object&&self,un=typeof global=="object"&&global&&global.Object===Object&&global||en||Function("return this")(),on=(en=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,cn=function(n){return function(t){return null==n?Z:n[t]}}({"&":"&amp;",
    "<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"}),fn=Array.prototype,an=Object.prototype,ln=an.hasOwnProperty,pn=0,sn=an.toString,hn=un._,vn=Object.create,bn=an.propertyIsEnumerable,yn=un.isFinite,gn=function(n,t){return function(r){return n(t(r))}}(Object.keys,Object),_n=Math.max;o.prototype=c(u.prototype),o.prototype.constructor=o;var jn=function(n,t){return function(r,e){if(null==r)return r;if(!P(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););
    return r}}(h),dn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}(),mn=String,On=function(n){return function(t,r,e){var u=Object(t);if(!P(t)){var o=_(r);t=Rn(t),r=function(n){return o(u[n],n,u)}}return r=n(t,r,e),-1<r?u[o?t[r]:r]:Z}}(function(n,t,r){var e=n?n.length:0;if(!e)return-1;r=null==r?0:kn(r),0>r&&(r=_n(e+r,0));n:{for(t=_(t),e=n.length,r+=-1;++r<e;)if(t(n[r],r,n)){n=r;break n}n=-1}return n}),xn=x(function(n,t,r){
    return F(n,t,r)}),An=x(function(n,t){return f(n,1,t)}),En=x(function(n,t,r){return f(n,Nn(t)||0,r)}),wn=Array.isArray,kn=Number,Nn=Number,Sn=S(function(n,t){N(t,gn(t),n)}),Tn=S(function(n,t){N(t,I(t),n)}),Fn=S(function(n,t,r,e){N(t,Dn(t),n,e)}),Bn=x(function(n){return n.push(Z,i),Fn.apply(Z,n)}),Rn=gn,Dn=I,In=x(function(n,t){return null==n?{}:O(n,d(s(t,1),mn))});u.assignIn=Tn,u.before=G,u.bind=xn,u.chain=function(n){return n=u(n),n.__chain__=true,n},u.compact=function(n){return p(n,Boolean)},u.concat=function(){
    for(var t=arguments.length,r=Array(t?t-1:0),e=arguments[0],u=t;u--;)r[u-1]=arguments[u];return t?n(wn(e)?E(e):[e],s(r,1)):[]},u.create=function(n,t){var r=c(n);return t?Sn(r,t):r},u.defaults=Bn,u.defer=An,u.delay=En,u.filter=function(n,t){return p(n,_(t))},u.flatten=function(n){return n&&n.length?s(n,1):[]},u.flattenDeep=function(n){return n&&n.length?s(n,nn):[]},u.iteratee=_,u.keys=Rn,u.map=function(n,t){return d(n,_(t))},u.matches=function(n){return m(Sn({},n))},u.mixin=Y,u.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
    return function(){return!n.apply(this,arguments)}},u.once=function(n){return G(2,n)},u.pick=In,u.slice=function(n,t,r){var e=n?n.length:0;return r=r===Z?e:+r,e?A(n,null==t?0:+t,r):[]},u.sortBy=function(n,r){var e=0;return r=_(r),d(d(n,function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}}).sort(function(n,t){var r;n:{r=n.criteria;var e=t.criteria;if(r!==e){var u=r!==Z,o=null===r,i=r===r,c=e!==Z,f=null===e,a=e===e;if(!f&&r>e||o&&c&&a||!u&&a||!i){r=1;break n}if(!o&&r<e||f&&u&&i||!c&&i||!a){r=-1;
    break n}}r=0}return r||n.index-t.index}),t("value"))},u.tap=function(n,t){return t(n),n},u.thru=function(n,t){return t(n)},u.toArray=function(n){return P(n)?n.length?E(n):[]:W(n)},u.values=W,u.extend=Tn,Y(u,u),u.clone=function(n){return V(n)?wn(n)?E(n):N(n,gn(n)):n},u.escape=function(n){return(n=Q(n))&&rn.test(n)?n.replace(tn,cn):n},u.every=function(n,t,r){return t=r?Z:t,a(n,_(t))},u.find=On,u.forEach=z,u.has=function(n,t){return null!=n&&ln.call(n,t)},u.head=q,u.identity=X,u.indexOf=$,u.isArguments=M,
    u.isArray=wn,u.isBoolean=function(n){return true===n||false===n||H(n)&&"[object Boolean]"==sn.call(n)},u.isDate=function(n){return H(n)&&"[object Date]"==sn.call(n)},u.isEmpty=function(n){return P(n)&&(wn(n)||L(n)||U(n.splice)||M(n))?!n.length:!gn(n).length},u.isEqual=function(n,t){return y(n,t)},u.isFinite=function(n){return typeof n=="number"&&yn(n)},u.isFunction=U,u.isNaN=function(n){return K(n)&&n!=+n},u.isNull=function(n){return null===n},u.isNumber=K,u.isObject=V,u.isRegExp=function(n){return V(n)&&"[object RegExp]"==sn.call(n);
  },u.isString=L,u.isUndefined=function(n){return n===Z},u.last=function(n){var t=n?n.length:0;return t?n[t-1]:Z},u.max=function(n){return n&&n.length?l(n,X,b):Z},u.min=function(n){return n&&n.length?l(n,X,j):Z},u.noConflict=function(){return un._===this&&(un._=hn),this},u.noop=function(){},u.reduce=C,u.result=function(n,t,r){return t=null==n?Z:n[t],t===Z&&(t=r),U(t)?t.call(n):t},u.size=function(n){return null==n?0:(n=P(n)?n:gn(n),n.length)},u.some=function(n,t,r){return t=r?Z:t,w(n,_(t))},u.uniqueId=function(n){
    var t=++pn;return Q(n)+t},u.each=z,u.first=q,Y(u,function(){var n={};return h(u,function(t,r){ln.call(u.prototype,r)||(n[r]=t)}),n}(),{chain:false}),u.VERSION="4.15.0",jn("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:fn)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);u.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(wn(u)?u:[],n);
  }return this[r](function(r){return t.apply(wn(r)?r:[],n)})}}),u.prototype.toJSON=u.prototype.valueOf=u.prototype.value=function(){return k(this.__wrapped__,this.__actions__)},typeof define=="function"&&typeof define.amd=="object"&&define.amd?(un._=u, define(function(){return u})):on?((on.exports=u)._=u,en._=u):un._=u}).call(this);

/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Antonio Aguilar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

( function (root, factory) {

  root.pubsub = factory(root._, root);

}(this, function (_, global, undefined) {

  var _defaultConfig = {
    DEFAULT_CHANNEL: '/',
    SYSTEM_CHANNEL: 'SYS',
    enableSystemMessages: false,
    cacheKeyDelimiter: '|',
    autoCompactResolver: false
  };

  var pubsub = { configuration: _.extend({}, _defaultConfig) };
  var _config = pubsub.configuration;

  var ChannelDefinition = function (channelName, bus) {
    this.bus = bus;
    this.channel = channelName || _config.DEFAULT_CHANNEL;
  };

  ChannelDefinition.prototype.subscribe = function () {
    return this.bus.subscribe({
      channel: this.channel,
      topic: ( arguments.length === 1 ? arguments[0].topic : arguments[0] ),
      callback: ( arguments.length === 1 ? arguments[0].callback : arguments[1] )
    });
  };

  ChannelDefinition.prototype.publish = function () {

    var envelope = {};
    var callback;

    if ( typeof arguments[0] === 'string' ) {
      envelope.topic = arguments[0];
      envelope.data = arguments[1];
      callback = arguments[2];
    }
    else {
      envelope = arguments[0];
      callback = arguments[1];
    }

    if ( typeof envelope !== 'object' ) {
      throw new Error('The first argument to ChannelDefinition.publish should be either an envelope object or a string topic.');
    }

    envelope.channel = this.channel;
    this.bus.publish(envelope, callback);

  };

  var SubscriptionDefinition = function (channel, topic, callback) {

    if ( arguments.length !== 3 ) {
      throw new Error('You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.');
    }

    if ( topic.length === 0 ) {
      throw new Error('Topics cannot be empty');
    }

    this.channel = channel;
    this.topic = topic;
    this.callback = callback;
    this.pipeline = [];
    this.cacheKeys = [];
    this._context = undefined;
  };

  var ConsecutiveDistinctPredicate = function () {
    var previous;
    return function (data) {
      var eq = false;

      if ( typeof data === 'string' ) {
        eq = data === previous;
        previous = data;
      }
      else {
        eq = _.isEqual(data, previous);
        previous = _.extend({}, data);
      }

      return !eq;
    };
  };

  var DistinctPredicate = function DistinctPredicateFactory() {
    var previous = [];
    return function DistinctPredicate(data) {
      var isDistinct = !_.any(previous, function (p) {
        return _.isEqual(data, p);
      });

      if ( isDistinct ) {
        previous.push(data);
      }
      return isDistinct;
    };
  };

  SubscriptionDefinition.prototype = {

    'catch': function (errorHandler) {
      var original = this.callback;
      this.callback = function () {
        try {
          original.apply(this, arguments);
        }
        catch ( err ) {
          errorHandler(err, arguments[0]);
        }
      };
      return this;
    },

    defer: function defer() {
      return this.delay(0);
    },

    disposeAfter: function disposeAfter(maxCalls) {

      if ( typeof maxCalls !== 'number' || maxCalls <= 0 ) {
        throw new Error('The value provided to disposeAfter (maxCalls) must be a number greater than zero.');
      }

      var self = this;
      var dispose = _.after(maxCalls, _.bind(function () {
        self.unsubscribe();
      }));

      self.pipeline.push(function (data, env, next) {
        next(data, env);
        dispose();
      });

      return self;
    },

    distinct: function distinct() {
      return this.constraint(new DistinctPredicate());
    },

    distinctUntilChanged: function distinctUntilChanged() {
      return this.constraint(new ConsecutiveDistinctPredicate());
    },

    invokeSubscriber: function invokeSubscriber(data, env) {
      if ( !this.inactive ) {
        var self = this;
        var pipeline = self.pipeline;
        var len = pipeline.length;
        var context = self._context;
        var idx = -1;
        var invoked = false;

        if ( !len ) {
          self.callback.call(context, data, env);
          invoked = true;
        }
        else {
          pipeline = pipeline.concat([self.callback]);
          var step = function step(d, e) {
            idx += 1;
            if ( idx < len ) {
              pipeline[idx].call(context, d, e, step);
            } else {
              self.callback.call(context, d, e);
              invoked = true;
            }
          };
          step(data, env, 0);
        }

        return invoked;
      }
    },

    logError: function logError() {
      if ( console ) {
        var report;

        if ( console.warn ) {
          report = console.warn;
        }
        else {
          report = console.log;
        }

        this.catch(report);
      }
      return this;
    },

    once: function once() {
      return this.disposeAfter(1);
    },

    subscribe: function subscribe(callback) {
      this.callback = callback;
      return this;
    },

    unsubscribe: function unsubscribe() {
      if ( !this.inactive ) {
        pubsub.unsubscribe(this);
      }
    },

    constraint: function constraint(predicate) {
      if ( typeof predicate !== 'function' ) {
        throw new Error('Predicate constraint must be a function');
      }
      this.pipeline.push(function (data, env, next) {
        if ( predicate.call(this, data, env) ) {
          next(data, env);
        }
      });
      return this;
    },

    constraints: function constraints(predicates) {
      var self = this;
      _.each(predicates, function (predicate) {
        self.constraint(predicate);
      });
      return self;
    },

    context: function contextSetter(context) {
      this._context = context;
      return this;
    },

    debounce: function debounce(milliseconds, immediate) {
      if ( typeof milliseconds !== 'number' ) {
        throw new Error('Milliseconds must be a number');
      }
      this.pipeline.push(
        _.debounce(function (data, env, next) {
            next(data, env);
          },
          milliseconds,
          !!immediate
        )
      );
      return this;
    },

    delay: function delay(milliseconds) {
      if ( typeof milliseconds !== 'number' ) {
        throw new Error('Milliseconds must be a number');
      }
      var self = this;
      self.pipeline.push(function (data, env, next) {
        setTimeout(function () {
          next(data, env);
        }, milliseconds);
      });
      return this;
    },

    throttle: function throttle(milliseconds) {
      if ( typeof milliseconds !== 'number' ) {
        throw new Error('Milliseconds must be a number');
      }
      var fn = function (data, env, next) {
        next(data, env);
      };
      this.pipeline.push(_.throttle(fn, milliseconds));
      return this;
    }

  };

  /**
   * pubsub provides a default implementation called bindingsResolver.
   * The resolver is the mechanism by which published message topics are matched
   * to the subscribers which should receive the message.
   */
  var bindingsResolver = _config.resolver = {
    cache: {},
    regex: {},
    enableCache: true,

    compare: function compare(binding, topic, headerOptions) {
      var pattern;
      var rgx;
      var prevSegment;
      var cacheKey = topic + _config.cacheKeyDelimiter + binding;
      var result = ( this.cache[cacheKey] );
      var opt = headerOptions || {};
      var saveToCache = this.enableCache && !opt.resolverNoCache;

      // result is cached?
      if ( result === true ) {
        return result;
      }

      // plain string matching?
      if ( binding.indexOf('#') === -1 && binding.indexOf('*') === -1 ) {
        result = ( topic === binding );
        if ( saveToCache ) {
          this.cache[cacheKey] = result;
        }
        return result;
      }

      // ah, regex matching, then
      if ( !( rgx = this.regex[binding] ) ) {
        pattern = '^' + _.map(binding.split('.'), function mapTopicBinding(segment) {
            var res = '';
            if ( !!prevSegment ) {
              res = prevSegment !== '#' ? '\\.\\b' : '\\b';
            }
            if ( segment === '#' ) {
              res += '[\\s\\S]*';
            } else if ( segment === '*' ) {
              res += '[^.]+';
            } else {
              res += segment;
            }
            prevSegment = segment;
            return res;
          }).join('') + '$';
        rgx = this.regex[binding] = new RegExp(pattern);
      }

      result = rgx.test(topic);

      if ( saveToCache ) {
        this.cache[cacheKey] = result;
      }

      return result;
    },

    reset: function reset() {
      this.cache = {};
      this.regex = {};
    },

    purge: function (options) {
      var self = this;
      var keyDelimiter = _config.cacheKeyDelimiter;
      var matchPredicate = function (val, key) {
        var split = key.split(keyDelimiter);
        var topic = split[0];
        var binding = split[1];
        if ( ( typeof options.topic === 'undefined' || options.topic === topic ) &&
          ( typeof options.binding === 'undefined' || options.binding === binding ) ) {
          delete self.cache[key];
        }
      };

      var compactPredicate = function (val, key) {
        var split = key.split(keyDelimiter);
        if ( pubsub.getSubscribersFor({ topic: split[0] }).length === 0 ) {
          delete self.cache[key];
        }
      };

      if ( typeof options === 'undefined' ) {
        this.reset();
      } else {
        var handler = options.compact === true ? compactPredicate : matchPredicate;
        _.each(this.cache, handler);
      }
    }
  };

  var pubInProgress = 0;
  var unSubQueue = [];
  var autoCompactIndex = 0;

  function clearUnSubQueue() {
    while ( unSubQueue.length ) {
      pubsub.unsubscribe(unSubQueue.shift());
    }
  }

  function getCachePurger(subDef, key, cache) {
    return function (sub, i, list) {
      if ( sub === subDef ) {
        list.splice(i, 1);
      }
      if ( list.length === 0 ) {
        delete cache[key];
      }
    };
  }

  function getCacher(topic, pubCache, cacheKey, done, envelope) {

    var headers = envelope && envelope.headers || {};

    return function (subDef) {

      if ( _config.resolver.compare(subDef.topic, topic, headers) ) {

        subDef.cacheKeys.push(cacheKey);

        if ( done ) {
          done(subDef);
        }

      }
    };
  }

  function getSystemMessage(kind, subDef) {
    return {
      channel: _config.SYSTEM_CHANNEL,
      topic: 'subscription.' + kind,
      data: {
        event: 'subscription.' + kind,
        channel: subDef.channel,
        topic: subDef.topic
      }
    };
  }

  var sysCreatedMessage = _.bind(getSystemMessage, this, 'created');
  var sysRemovedMessage = _.bind(getSystemMessage, this, 'removed');

  function getPredicate(options, resolver) {

    if ( typeof options === 'function' ) {
      return options;
    }

    else if ( !options ) {
      return function () { return true; };
    }

    else {
      return function (sub) {

        var compared = 0;
        var matched = 0;

        // We use the bindings resolver to compare the options.topic to subDef.topic
        // Any other potential prop/value matching outside topic & context...
        _.each(options, function (val, prop) {
          compared += 1;
          if ( ( prop === 'topic' && resolver.compare(sub.topic, options.topic, { resolverNoCache: true }) ) || ( prop === 'context' && options.context === sub._context ) || ( sub[prop] === options[prop] ) ) {
            matched += 1;
          }
        });
        return compared === matched;
      };
    }
  }

  _.extend(pubsub, {
    cache: {},
    subscriptions: {},
    wireTaps: [],

    ChannelDefinition: ChannelDefinition,
    SubscriptionDefinition: SubscriptionDefinition,

    channel: function channel(channelName) {
      return new ChannelDefinition(channelName, this);
    },

    addWireTap: function addWireTap(callback) {
      var self = this;
      self.wireTaps.push(callback);
      return function () {
        var idx = self.wireTaps.indexOf(callback);
        if ( idx !== -1 ) {
          self.wireTaps.splice(idx, 1);
        }
      };
    },

    getSubscribersFor: function getSubscribersFor(options) {
      var result = [];
      var self = this;
      _.each(self.subscriptions, function (channel) {
        _.each(channel, function (subList) {
          result = result.concat(_.filter(subList, getPredicate(options, _config.resolver)));
        });
      });
      return result;
    },

    /**
     * Postal's Publish Method
     * @param envelope
     * @param cb
     */
    publish: function publish(envelope, cb) {

      ++pubInProgress;

      // using ISO date string as a preferred timestamp
      envelope.timestamp = new Date().toISOString();

      var channel = envelope.channel = envelope.channel || _config.DEFAULT_CHANNEL;
      var topic = envelope.topic;

      if ( this.wireTaps.length ) {
        _.each(this.wireTaps, function (tap) {
          tap(envelope.data, envelope, pubInProgress);
        });
      }

      var cacheKey = channel + _config.cacheKeyDelimiter + topic;
      var skipped = 0;
      var activated = 0;

      var cache = this.cache[cacheKey];

      if ( !cache ) {
        // resolverNoCache is disabled internally in getCacher method
        var cacherFn = getCacher(topic, this.cache, cacheKey, function (candidate) { if ( candidate.invokeSubscriber(envelope.data, envelope) ) { activated++; } else { skipped++; }}, envelope);

        _.each(this.subscriptions[channel], function (candidates) { _.each(candidates, cacherFn); });

      }
      else {
        _.each(cache, function (subDef) {
          if ( subDef.invokeSubscriber(envelope.data, envelope) ) {
            activated++;
          } else {
            skipped++;
          }
        });
      }

      if ( --pubInProgress === 0 ) { clearUnSubQueue(); }

      if ( cb ) { cb({ activated: activated, skipped: skipped }); }

    },

    /**
     * Postal's Subscribe Method
     * @param options
     * @returns {SubscriptionDefinition}
     */
    subscribe: function subscribe(options) {

      var subscriptions = this.subscriptions;
      var subDef = new SubscriptionDefinition(options.channel || _config.DEFAULT_CHANNEL, options.topic, options.callback);
      var channel = subscriptions[subDef.channel];
      var channelLen = subDef.channel.length;
      var subs;

      if ( !channel ) {
        channel = subscriptions[subDef.channel] = {};
      }

      subs = subscriptions[subDef.channel][subDef.topic];

      if ( !subs ) {
        subs = subscriptions[subDef.channel][subDef.topic] = [];
      }

      // First, add the SubscriptionDefinition to the channel list
      subs.push(subDef);

      // Next, add the SubscriptionDefinition to any relevant existing cache(s)
      _.each(_.keys(this.cache), function (cacheKey) {

        if ( cacheKey.substr(0, channelLen) === subDef.channel ) {
          getCacher(cacheKey.split(_config.cacheKeyDelimiter)[1], this.cache, cacheKey)(subDef);
        }

      }, this);

      if ( _config.enableSystemMessages ) {
        this.publish(sysCreatedMessage(subDef));
      }

      return subDef;
    },

    /**
     * Postal's Unsubscribe Method
     */
    unsubscribe: function unsubscribe() {
      var unSubLen = arguments.length;
      var unSubIdx = 0;
      var subDef;
      var channelSubs;
      var topicSubs;
      var idx;

      for ( ; unSubIdx < unSubLen; unSubIdx++ ) {
        subDef = arguments[unSubIdx];
        subDef.inactive = true;

        if ( pubInProgress ) {
          unSubQueue.push(subDef);
          return;
        }

        channelSubs = this.subscriptions[subDef.channel];
        topicSubs = channelSubs && channelSubs[subDef.topic];

        if ( topicSubs ) {
          var len = topicSubs.length;
          idx = 0;

          // remove SubscriptionDefinition from channel list
          while ( idx < len ) {

            if ( topicSubs[idx] === subDef ) {
              topicSubs.splice(idx, 1);
              break;
            }
            idx += 1;
          }

          if ( topicSubs.length === 0 ) {
            delete channelSubs[subDef.topic];
            if ( !_.keys(channelSubs).length ) {
              delete this.subscriptions[subDef.channel];
            }
          }

          // Remove SubscriptionDefinition from pubsub cache
          if ( subDef.cacheKeys && subDef.cacheKeys.length ) {
            var key;
            while ( key = subDef.cacheKeys.pop() ) {
              _.each(this.cache[key], getCachePurger(subDef, key, this.cache));
            }
          }

          if ( typeof _config.resolver.purge === 'function' ) {

            // check to see if relevant resolver cache entries can be purged
            var autoCompact = _config.autoCompactResolver === true ? 0 : typeof _config.autoCompactResolver === 'number' ? ( _config.autoCompactResolver - 1 ) : false;

            if ( autoCompact >= 0 && autoCompactIndex === autoCompact ) {
              _config.resolver.purge({ compact: true });
              autoCompactIndex = 0;
            }
            else if ( autoCompact >= 0 && autoCompactIndex < autoCompact ) {
              autoCompactIndex += 1;
            }
          }

        }

        if ( _config.enableSystemMessages ) {
          this.publish(sysRemovedMessage(subDef));
        }
      }
    },

    reset: function reset() {
      this.unsubscribeFor();
      _config.resolver.reset();
      this.subscriptions = {};
      this.cache = {};
    },

    unsubscribeFor: function unsubscribeFor(options) {
      var toDispose = [];

      if ( this.subscriptions ) {
        toDispose = this.getSubscribersFor(options);
        this.unsubscribe.apply(this, toDispose);
      }
    }
  });

  /**
   * Implements promise feature
   */
  var ForkJoin = function (queue, onSuccess, onError, options) {
    var self = this;
    var _onError = (Object.prototype.toString.call(onError) === '[object Function]') ? onError : function () {};
    var _options = (Object.prototype.toString.call(onError) === '[object Object]') ? onError : options || {};
    var _subscriptions = [];
    var _timeoutFn;

    var _startTimeOut = function () {
      if ( _options.timeout ) {
        _timeoutFn = setTimeout(function () {
          _onError({
            type: 'timeout',
            data: _.map(_subscriptions, 'data')
          });
        }, _options.timeout);
      }
    };

    var _reset = function () {
      _.each(_subscriptions, function (sub) {
        sub.data = undefined;
      });
    };

    var _checkFired = function () {
      var _data = _.map(_subscriptions, 'data');

      if ( _.every(_data, _.identity) ) {

        clearTimeout(_timeoutFn);
        onSuccess.apply(this, _data);

        if ( _options.once ) {
          self.dispose();
        }
        else {
          _reset();
          _startTimeOut();
        }
      }
    };

    self.dispose = function () {
      _.each(_subscriptions, function (sub) {
        sub.unsubscribe();
      });
      _subscriptions = [];
    };

    _.each(queue, function (sub) {
      var subscriptionDefinition = pubsub.subscribe(sub);
      subscriptionDefinition.data = undefined;
      subscriptionDefinition.subscribe(function (data) {
        subscriptionDefinition.data = data;
        _checkFired();
      });
      _subscriptions.push(subscriptionDefinition);
    });

    _startTimeOut();
  };

  /**
   * Implements the pubsub.when() method
   */
  pubsub.when = function (queue, onSuccess, onError, options) {
    return new ForkJoin(queue, onSuccess, onError, options);
  };

  return pubsub;
}) );

(function () {
  angular.module('ngBus', []).config(["$provide", function ($provide) {
    $provide.decorator('$rootScope', ["$delegate", function ($delegate) {
        Object.defineProperty($delegate.constructor.prototype, '$event', {
          get: function () {
            var self = this;
            return {
              when: pubsub.when.bind(pubsub),
              channel: pubsub.publish.bind(pubsub),
              publish: pubsub.publish.bind(pubsub),
              subscribe: function () {
                var fn = pubsub.subscribe.apply(pubsub, arguments);
                self.$on('$destroy', function () {
                  fn.unsubscribe();
                });
                return fn;
              },
              subscriptions: pubsub.subscriptions,
              getSubscribersFor: pubsub.getSubscribersFor.bind(pubsub),
              unsubscribeFor: pubsub.unsubscribeFor.bind(pubsub),
              addWireTap: pubsub.addWireTap.bind(pubsub),
              reset: pubsub.reset
            };
          },
          enumerable: false
        });
        return $delegate;
      }]
    );
  }]);
})();