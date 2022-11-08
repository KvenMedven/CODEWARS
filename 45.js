function grow(x){
    let b = 1;
    for (let i = 0;i < x.length; i++) {
        b *= x[i];
    }
    return b;
}