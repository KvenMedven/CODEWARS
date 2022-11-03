function abbrevName(name){

    // code away
    let initials = name[0]+'.';
    let letter='';
    for (i=0;i<name.length;i++) {

        if(name[i]=== ' ') {
            letter = name[++i];
        }
    }
    initials +=letter;
    return initials.toUpperCase();
}