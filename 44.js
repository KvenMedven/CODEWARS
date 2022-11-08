function swap (string) {
    let str = '';
    if (typeof(string) === "string" ) {
        for (i=0;i<string.length;i++) {
            if(string[i]=== "a" || string[i]=== "e" || string[i]=== "i" || string[i]=== "o" || string[i]=== "u" ) {
                str += string[i].toUpperCase();
            } else {
                str += string[i]
            }

        }
    }
    return str;
}