/*Given an array of integers, return a new array with each value doubled.

 */
function maps(x){
    let array = []
    for (let i=0;i<x.length;i++){
       n = x[i]*2 ;
       array[i] = n;

    }
    return array;
};