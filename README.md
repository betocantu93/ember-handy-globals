ember-handy-globals
==============================================================================

Adds some globals to your Ember.js App, for easier developing!


Installation
------------------------------------------------------------------------------

```
ember install ember-handy-globals
```


Usage
------------------------------------------------------------------------------

Open the browser console and start using it!

## Easy object picking
- App.lookup('service:some-service')
- App.service('some-service')
- App.controller('some.route')
- App.route('some.route')

## Current Context
Grabs the current active the objects of the current active route

- App.ctx.route
- App.ctx.controller
- App.ctx.model


Contributing
------------------------------------------------------------------------------

Have any ideas? please open a PR or file an issue.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
