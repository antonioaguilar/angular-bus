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

angular.module('Bus', []).config(function( $provide ) {

  $provide.decorator('$rootScope', function( $delegate ) {

      Object.defineProperty($delegate.constructor.prototype, '$event', {
        get: function() {
          var self = this;
          return {
            when: pubsub.when.bind(pubsub),
            channel: pubsub.publish.bind(pubsub),
            publish: pubsub.publish.bind(pubsub),
            subscribe: function() {
              var fn = pubsub.subscribe.apply(pubsub, arguments);
              self.$on('$destroy', function() {
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
    }
  );

});
