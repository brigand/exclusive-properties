var has = Object.prototype.hasOwnProperty;

module.exports = function exclusiveProperties(a, b) {
  var res = {};
  Object.keys(a).forEach(function(key) {
    if (!has.call(b, key)) {
      res[key] = a[key];
    }
  });

  Object.keys(b).forEach(function(key) {
    if (!has.call(a, key)) {
      res[key] = b[key];
    }
  });

  return res;
};

