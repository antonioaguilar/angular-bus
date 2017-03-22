// Bind pubsub to Angular root scope as $event property
(function() {
  let pubsub = require('./pubsub');
  angular.module('ngBus', []).config(["$provide", function($provide) {
    $provide.decorator('$rootScope', ["$delegate", function($delegate) {
        Object.defineProperty($delegate.constructor.prototype, '$event', {
          get: function() {
            let self = this;
            return {
              when: pubsub.when.bind(pubsub),
              publish: pubsub.publish.bind(pubsub),
              subscribe: function() {
                let sub = pubsub.subscribe.apply(pubsub, arguments);
                sub.onUnsubscribe = self.$on('$destroy', function() { sub.unsubscribe(); });
                return sub;
              },
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
}());
