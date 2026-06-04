function e() {
  var e2 = [...arguments];
  return function() {
    e2.forEach(function(e3) {
      return e3();
    });
  };
}
export {
  e as t
};
