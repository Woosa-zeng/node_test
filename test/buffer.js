const assert = require('assert');

//buffer.from()
//1.(string,encoding)
const encodingTest = 'hello world'

let buf1 = Buffer.from(encodingTest, 'utf8');
// console.log(buf1)

let buf2 = Buffer.from([0x68,0x65,0x6c,0x6c,0x6f,0x20,0x77,0x6f,0x72,0x6c,0x64])

//console.log(buf2.toString())





//--------------汉字转码问题
//汉字需要三位buffer来标示
//let test = '窗'; // e7, aa, 79
//console.log(Buffer.from(test));


let test = '窗';
let buf3 = Buffer.from([0xe7])
let buf4 = Buffer.from([0xaa])
let buf5 = Buffer.from([0x97])
//console.log(Buffer.concat([buf3,buf4,buf5],3).toString('utf8'));


const fs = require('fs');
let data = fs.createReadStream('./test/tmp',{
	highWaterMark: 1,
});
let out = [];
data.on('data',(chunk)=>{
	out.push(chunk)//===>out = out.toString()+chunk.toString()
}).on('end',()=>{
	console.log(Buffer.concat(out).toString());
})


