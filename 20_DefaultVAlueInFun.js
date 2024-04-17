// <<<<<<<<< Default Value In Function >>>>>>


// previously handled


// function Add(a, b) {
//     if(typeof b === "undefined"){
//         b=5
//     }

//     return a+b
// }


// console.log(Add(5))


// Now How we handle with default parameter

function Add(a,  b=5) {
    return a+b
}
console.log(Add(5))

// Rest Parameter

function MyFun(a,b,...c){
    console.log(a) // 5
    console.log(b)  // 2
    console.log(c) // [3, 54, 566, 6] the remaining argument will be a array becauser ...c

}


console.log(MyFun(5,2,3,54,566,6))


// 

const AddAll = (...a)=>{
    let res = 0;
    for(let num of a){
        res = res+num;
    }
    return res;
}

console.log(AddAll(1,2,3,4,5,5,6,6))