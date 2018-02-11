var fs = require('fs')
var http = require('http')
var CountStream = require('./count-stream')
var countStreamFs = new CountStream('hello')
var countStreamHttp = new CountStream('baidu')

fs.createReadStream('./news.text').pipe(countStreamFs)
http.get('http://www.baidu.com/', (res) => {
  res.pipe(countStreamHttp)
})

function log (count) {
  console.log('this file total hello count: %d', count)
}

countStreamFs.on('total', log)
countStreamHttp.on('total', log)