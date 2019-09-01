// 1.数组去重

// function unique(arr){
//     const res=new Map();
//     return arr.filter(a=>!res.has(a)&&res.set(a,1))
// }

// let arr=[2,3,3,3,3,,3,]
// console.log(unique(arr))


// function unique2(arr){
//     return Array.from(new Set(arr))
// }
// console.log(unique2(arr))


// function unique3(arr){
//     return [...new Set(arr)]
// }
// console.log(unique3(arr))


// parseInt 遇上map

["1", "2", "3"].map(parseInt)
// parseInt("1", 0) 的结果是当作十进制来解析，返回 1；
// parseInt("2", 1) 的第二个参数非法，返回 NaN；
// parseInt("3", 2) 在二进制中，"3"是非法字符，转换失败，返回 NaN。

console.log([typeof null,null instanceof Object])

var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
//该死的优先级

