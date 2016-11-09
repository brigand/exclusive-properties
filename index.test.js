var diff = require('./');

it('works', () => {
  var a = {x: 1, y: 2};
  var b = {x: 2, z: 3};
  expect(diff(a, b)).toEqual({y: 2, z: 3});
});

