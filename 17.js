function XO(str) {
    let X = 0;
    let O = 0;
    for (i=0;i<str.length;i++) {
        if(str[i]==="X"||str[i]==="x") {
            X++;
        } else if(str[i]==="o"||str[i]==="O")  {
            O++;
        }
    }
    if (X===O) {
        return true;
    } else {
        return false;
    }
}