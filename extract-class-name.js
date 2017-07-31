(function (root, factory) {
    // export this module
  if (typeof define === 'function' && define.amd) {
    // amd mode
    define([], factory);
    // define(['depName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // cmd mode
    module.exports = factory();
    // module.exports = factory(require('depName'))
  } else {
    // browser global: window
    root['extractClassName'] = factory();
    // root['moduleName'] = factory(root.depName);
  }
}(this, function () {

  var reg = /(?:class)\s*=\s*['"](.+?)['"]/ig;

 return function extractClassName(html) {
    var retArr = [];
    var raw = reg.exec(html)
    while(raw) {
      var split = raw[1].trim().split(' ')
      retArr = retArr.concat(split)
      raw = reg.exec(html)
    }
    // unique
    return Array.from(new Set(retArr));
  }

}));