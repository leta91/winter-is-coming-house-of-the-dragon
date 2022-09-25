let text = "<h1>Winter is coming</h1>";
let myRegex = /.h[0-9]*?>/;             
let result = text.match(myRegex);

console.log(result);
 
// <h1> is printed to the console //

