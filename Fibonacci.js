function Fibonacci(n){
    if(n<=1){
        return 1
    }else{
        return Fibonacci(n-1)+Fibonacci(n-2)
    }
}
console.time("f1")
Fibonacci(40);
console.timeEnd("f1");
function Fibonacci2(n,ac1=1,ac2=1){
    if(n<=1){
        return 1
    }else{
        return Fibonacci2(n-1,ac2,ac1+ac2)
    }
}
console.time("f2")
console.log(Fibonacci2(40));
console.timeEnd("f2");

function Fibonacci3(n){
    if(n===1||n===2){
        return 1
    }else{
        let ac1=1,ac2=1;
        for(let i=2;i<n;i++){
            [ac1,ac2]=[ac2,ac1+ac2]
        }
        return ac2
    }
}
console.time("f3")
Fibonacci3(40);
console.timeEnd("f3");