#!/usr/bin/env node
var errno = require('./')
  , data
  , code

if (process.argv[2] === undefined)
  return console.log(JSON.stringify(errno.code, null, 2))

if (code = +process.argv[2])
  data = errno.errno[code]
else
  data = errno.code[process.argv[2]]
console.log(JSON.stringify(data, null, 2))
