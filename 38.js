function vowelOne(s){
    // ...
    let str = '';
    for (let i = 0;i < s.length; i++) {
        switch (s[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                str +='1'
                break;

            default :
                str +='0'
                break;


        }
    } return str;
}