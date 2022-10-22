/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

 */

function makeNegative(num) {
    a = Math.sign(num);
    if (a === 1) {
        let s = -num;
        return s;
    } else {
        return num;
    }
}