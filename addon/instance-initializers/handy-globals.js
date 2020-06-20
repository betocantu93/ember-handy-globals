export function initialize(application) {
  if (application.resolveRegistration('config:environment') !== 'production') {
    /**
      This basically exposes the application, pretty useful because
      you can use stuff like this from the console.
      App.lookup('route:some-route').actions.doSomething();
    */
    window.App = application;

    /*
      This will gives us access to the store easily, to make fast queries or checks!
      
      Fast and easy:
      var s = App.store.peekRecord('some-model', 1);
      
      App.store.createRecord('some-model', {name: 'Alberto'})
    */
    window.App.store = application.__container__.lookup('service:store');

    //shortcuts for every emberjs base type lookup
    //App.controller('auth.some')
    let objects = ['service', 'controller', 'route', 'model'];

    objects.forEach((type) => {
      window.App[type] = function (name) {
        return application.lookup(`${type}:${name}`);
      };
    });

    /*
      Use a class for ergonimics with getters, grab the current model, route or controller based
      on the current active route!
    */
    class CurrentContext {
      get model() {
        return application.lookup(
          `controller:${application.lookup('service:router').currentRouteName}`
        ).model;
      }
      get controller() {
        return application.lookup(
          `controller:${application.lookup('service:router').currentRouteName}`
        );
      }
      get route() {
        return application.lookup(
          `route:${application.lookup('service:router').currentRouteName}`
        );
      }
    }

    window.App.ctx = new CurrentContext();
  }
}

export default {
  name: 'handy-globals',
  initialize,
};
