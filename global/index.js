var moduleA = require('./module-a')
console.log(require.resolve('./module-a')) // 查看require('xx') 最终加载的那个文件
// console.log(require.cache)
delete require.cache[require.resolve('./module-a')] // 删除缓存模板

console.log(__filename)
console.log(__dirname)

console.time('log-time')
console.error('error') // stderr
console.warn('warn')  // stderr
console.info('info %s', 'string')
console.info('info %d', 100.1)
console.info('info %j', {a: 100})
console.info(process.arch)
console.info(process.platform)
console.info(process.memoryUsage())
console.timeEnd('log-time')

// cat ./module-a.js | node ./index.js
process.stdin.setEncoding('utf-8') // 默认 data 为 buffer，当设置了encoding 则为string

process.stdin.on('data', function (chunk) {
  if(Buffer.isBuffer(chunk)){
    console.log('is buffer')
    console.log(chunk.toString())
  } else {
    console.log('is not buffer')
    console.log(chunk)
  }
  // console.trace()
})

// console.error 写入的是 stderr
// 3个标准流： stdin stdout stderr 对应 0 1 2
// node ./index.js > error.log  stdout 写入, stderr 会输出到控制台
// node ./index.js 2> error.log  stderr 覆盖写入
// node ./index.js 2>> error.log   追加写入