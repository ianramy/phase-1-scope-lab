// Write your solution in this file!
// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Function to upper-case the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope
var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = 'somebody';

// Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    // This will throw an error because leastFavoriteCustomer is a constant
    leastFavoriteCustomer = 'someone else';
}
