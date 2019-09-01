var arr=[];
function setArr(n=50){
    // let arr=[]
    for(var i=0;i<n;i++){
        arr.push(Math.floor(Math.random()*200+10))
    }
    return arr;
}
async function bubbleSort(){
    let arr=await setArr();
        for(var i=0;i<arr.length;i++){
            for(var k=0;k<arr.length;k++){
                if(arr[k]>arr[k+1]){
                    [arr[k],arr[k+1]]=[arr[k+1],arr[k]]
                }
            }
        };
        console.log(arr)
    
    // for(var i=0;i<arr.length;i++){
    //     for(var k=0;k<arr.length;k++){
    //         if(arr[k]>arr[k+1]){
    //             [arr[k],arr[k+1]]=[arr[k+1],arr[k]]
    //         }
    //     }
    // }
    // return arr
}
console.log(bubbleSort(arr))