
## install

```
npm install exclusive-properties
```

## usage

```js
var exclusive = require('exclusive-properties');
exclusive({a: 1, b: 2}, {b: 2, c: 3});
// => {a: 1, c: 3}
```

## many arguments

Currently it only supports two arguments, but if you have an array of objects:

```js
var res = objects.reduce(exclusive, {});
```

