// const arr = [1, 2, 3 [1, 2, 3 [1, 2]], 3]


// function findCount(arr, num) {
//     let count = 0;
//     for(i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             const result = findCount(arr[i], num);
//             count += result;
//             // right here!
//         } else if (arr[i] === num ) {
//             count++;
//         }
//     }
//     return count;
// }


// function findCount([1, 2, 3 [1, 2]], 1) {
//     let count = 0;
//     for(i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             const result = findCount(arr[i], num); // called here!
//             count += result;
//             // right here!
//         } else if (arr[i] === num) {
//             count++;
//         }
//     }
//     return count;
// }

// function findCount([1, 2], 1) {
//     let count = 0; // right here!
//     for(i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             const result = findCount(arr[i], num); // called here!
//             count += result;
//             // right here!
//         } else if (arr[i] === num) {
//             count++;
//         }
//     }
//     return count;
// }

// function factorial(num){
//     if(num === 0){
//         return 1;
//     } 
//     return num * factorial(num - 1)
// }