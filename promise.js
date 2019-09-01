// // const sleep = (timeountMS) => new Promise((resolve) => {
// //     setTimeout(resolve, timeountMS);
// //    });

// //    (async () => { // 声明即执行的 async 函数表达式
// //     for (var i = 0; i < 5; i++) {
// //      await sleep(1000);
// //      console.log(new Date, i);
// //     }

// //     await sleep(1000);
// //     console.log(new Date, i);
// //    })();



//    var p= new Promise((resolve,reject)=>{
//        console.log(new Date)
//        setTimeout(()=>{
//            resolve("hello")
//        },2000)
//    })
//    p.then(data=>{
//     console.log(new Date)
//        console.log(data)
//    })

// function runAsync(){
//     console.log(new Date)
//     var p =new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(new Date);
//             resolve("finished")
//         },2000)
//     })
//     return p
// }
// runAsync().then((data)=>{
//     console.log(new Date,data)
// })



// runAsync()
// .then(data=>{
//     console.log(new Date,data)
//     return runAsync()
// })
// .then(data=>{
//     console.log(new Date,data)
//     return runAsync()
// })
// .then(data=>{
//     console.log(new Date,data)
//     // return runAsync()
// })


// const promise=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve();
//     console.log(2)
// })
// promise.then(()=>{
//     console.log(3)
// })

// console.log(4)


//1 2 4 3



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 1000)
})

const promise2 = promise1.then(() => {
    throw new Error("error")
})


console.log("promise1", promise1);
console.log("promise2", promise2)

setTimeout(() => {
    console.log("promise1", promise1);
    console.log("promise2", promise2)
},2000)