function disemvowel(str) {
    let finalString ='';
    for(i=0;i<str.length;i++){
        if (str[i]==="A"||str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"||str[i]==="E"||str[i]==="I"||str[i]==="O"||str[i]==="U") {
            continue;
        } else {
            finalString = finalString.concat(str[i]);
        }
    }
    return finalString;
}