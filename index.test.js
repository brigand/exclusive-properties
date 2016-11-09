var diff = require('./');

it('works', () => {
  var a = {x: 1, y: 2};
  var b = {x: 2, z: 3};
  expect(diff(a, b)).toEqual({y: 2, z: 3});
});

it('reduce', () => {
  var objs = [
    {a: 1},
    {a: 1, b: 2},
    {c: 1},
    {d: 2, b: 4},
  ];

  var res = objs.reduce(diff, {});
  expect(res).toEqual({c: 1, d: 2});
});

