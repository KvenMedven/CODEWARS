function solution(str){
    let string ='';
    for(i = str.length-1;i >= 0;i--) {
        string += str[i];
    }
    return string;
}