# node-errno
[libuv](https://github.com/joyent/libuv) errno details exposed. Available in npm as *errno*

Ever find yourself needing more details about NodeJS errors? Me too, so *node-errno* contains the errno mappings direct from libuv so you can use them in your code.

**By errno:**

```js
require('errno').errno[3]
// → {
//     "errno": 3,
//     "code": "EACCES",
//     "description": "permission denied"
//   }
```

**By code:**

```js
require('errno').code.ENOTEMPTY
// → {
//     "errno": 53,
//     "code": "ENOTEMPTY",
//     "description": "directory not empty"
//   }
```

**Make your errors more descriptive:**

```js
var errno = require('errno')

function errmsg(err) {
    var str = 'Error: '
    // if it's a libuv error then get the description from errno
    if (errno.errno[err.errno]) {
        str += errno.errno[err.errno].description
    } else {
        str += err.message
    }
    
    // if it's a `fs` error then it'll have a 'path' property
    if (err.path) {
        str += ' [' + err.path + ']'
    }
    return str
}

var fs = require('fs')

fs.readFile('thisisnotarealfile.txt', function (err, data) {
    if (err)
        return console.log(errmsg(err))
})
```

Use the command line tool

    ~ $ errno 53
    {
      "errno": 53,
      "code": "ENOTEMPTY",
      "description": "directory not empty"
    }
    ~ $ errno EROFS
    {
      "errno": 56,
      "code": "EROFS",
      "description": "read-only file system"
    }
    ~ $ errno unknown
    undefined

Supply no arguments for the full list

*Copyright (c) 2012 [Rod Vagg](https://github.com/rvagg) ([@rvagg](https://twitter.com/rvagg))*

Made available under the MIT licence:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
