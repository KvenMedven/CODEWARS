/* Calculate average
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */


function findAverage(array) {
    if (array.length === 0 ) {
        return 0;
    } else {
        let sum = 0;
        for (i=0;i<array.length;i++){
            sum += array[i];

        }
        let m = sum/array.length;
        return m;
    }
}