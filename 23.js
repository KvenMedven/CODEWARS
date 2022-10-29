function solution(str){
    let string1 ='';
    for(i = str.length-1;i >= 0;i--) {
        string1 += str[i];
    }
    return string1;
}