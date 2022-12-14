/*Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00
 */

function excludingVatPrice(price){
    if (price > 0) {
        let sum = (price/115)*100;
        return +sum.toFixed(2);
    } else if (price === null) {
        return -1;
    } else if (price === 0) {
        return 0;
    }
}