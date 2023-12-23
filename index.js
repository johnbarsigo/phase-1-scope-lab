var customerName = "bob";
function upperCaseCustomerName ( name1 ){
    result = name1.toUpperCase();
    return result;
}
upperCaseCustomerName ( customerName );



function setBestCustomer (){
    bestCustomer = "not bob";
}
setBestCustomer ();

function overwriteBestCustomer (){
    bestCustomer = "maybe bob";
}
overwriteBestCustomer ();
console.log ( bestCustomer );


const leastFavoriteCustomer = "Perez";
function changeLeastFavoriteCustomer (){
    leastFavoriteCustomer = "Bob";
}
changeLeastFavoriteCustomer();
console.log ( leastFavoriteCustomer );

