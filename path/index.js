var path = require("path");
var p = "C:/Users/LEGION/Desktop/august24/adfar/Backend/path/index.js"

// var dir = path.dirname(p)
// console.log(dir)
// console.log(path.extname(p))
// console.log(path.basename(p));
var a = path.parse(p);
console.log(a)

var obj = {
    root: 'C:/fyrtyty',
    dir: 'C:/Users/LEGION/Desktop/august24/Backend/path',
    base: 'index.js',
    ext: '.js',
    name: 'indexhfgfhgfgfgh'
  }

var p = path.format(obj)
console.log(p)