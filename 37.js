function digitize(n) {
    //code here
    let array = [];
    let str = String(n);
    for (i=str.length-1;i>=0;i--) {
        array.push(Number(str[i]));
    }
    return array;
}