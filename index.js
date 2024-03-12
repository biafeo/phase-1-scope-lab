// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

const leastFavoriteCustomer = 'rose'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not rose"
    return leastFavoriteCustomer;
}