const buffer = Buffer.from('cqh')
console.log(buffer) // 0x63 0x71 0x68
console.log(buffer[0]) // 0x63  0110 0011  => 十进制 2^6 + 2^5 + 3 = 64 + 32 + 3 = 99
console.log(buffer.toString()) // cqh
console.log(buffer.readUInt16LE(0)) // 0x63 0x71  => 29027  LE小端(前面整体移动到小位数)，BE大端（前面整体移动到大位数）
console.log((29027).toString(16)) // 0x71 0x63

// 1234 5678
//
// 16位-小端 5678 1234   而不是 8765 4321 (是一个整体的小端，大端放置)
// 16位-大端 1234 5678
// 一个整体-小部分，顺序整体移动的