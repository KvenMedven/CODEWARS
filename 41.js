function lovefunc(flower1, flower2){
    // moment of truth
    if (flower1%2== true && flower2%2==false) {
        return true;
    } else if (flower1%2== false && flower2%2==true) {
        return true;
    } else {
        return false;
    }
}