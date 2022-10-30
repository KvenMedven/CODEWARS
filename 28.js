function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sum = 0;
    for (i=0;i<arrayOfSheep.length;i++) {
        if(arrayOfSheep[i]===true) {
            sum++;
        } else {
            continue
        }
    }
    return sum
}