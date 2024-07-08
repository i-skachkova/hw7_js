// 1
// let A = [1, 2, 3];
// A[1] = 10;
// console.log(A);


// 2
// let A = ["first string", "second string", "third string"];
// A[A.length] = "one more string";
// console.log(A);


// 3
// const A = [1, 2, 3, 4, 5, 6];
// let res = 0;
// for(let i = 0; i < A.length; i++){
//     res += A[i];
// }
// console.log(res);


// 4
// const A = [1, 2, 3, 4, 5];
// for(let i = 0; i < A.length; i++){
//     console.log(A[i]);
// }


// 5
// let A = ["aaa", "aaaaaaa", "eeeee", "rrrrrrrrrr", "1234567"];
// for(let i = 0; i < A.length; i++){
//     if(A[i].length > 5) console.log(A[i]);
// }


// 6
// const A = [34, 11, 87, 1, 90, 243, 33, 98, 12, 67];
// let maxN = A[0];
// for(let i = 0; i < A.length; i++){
//     if(A[i] > maxN) maxN = A[i];
// }
// console.log(maxN);


// 7
const A = [34, 11, 87, 1, 90, 243, 33, 98, 12, 67];
for(let i = 0; i < A.length; i++){
    if(A[i]%2 === 0) console.log(A[i]);
}