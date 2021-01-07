

/**
 * code by MehrBarz
 *  
 */

var Number  = "78"; // in-line comment

Number = 8;

let OurName = "Great" ;   // in the scope only

const pi = 3.14 ;   // constant

var a;
var b = 5 ; // delaration and assignment

var quotes = "Those who were seen dancing\"quoted from\" ";   //use \ to escape the " charachter

var singleQuote = '<a href="http://mehrbarz.wordpress.com">link</a>' ;   // no need to escape the "

var backticks = `'<a href="http://mehrbarz.wordpress.com">link</a>' `  // with backticks it is now possible to use both " and ' 

var firstName = "Mehran";
var lastLetterOfFirstName = firstName[firstName.length - 1];
var lastName = "Barzegar";

var secondToLastLetterOfLastName = lastName[lastName.length -2];

function wordBlanks(myNoun , myAdjective , myVerb , myAdverb) {
    var result = ""; 
    result += "The " +" "+ myAdjective +" "+ myNoun + " " + myVerb + " the grass" + myAdverb ;
    return result;
}

var ourArray = ["Jake" , 32];

var myArray = ["que" , 3];
var myArray01 = [ ["Array" , "nested"] , ["Another" , 32]] ; // nested array 

var myArray02 = [43,2,4];
var myData = myArray02[0];  // reading array at index 0

console.log(wordBlanks("pony", "small" , "is eating" , " slowly."));

console.log(lastLetterOfFirstName);
console.log(secondToLastLetterOfLastName);

console.log("Created");
console.log(quotes);
console.log(myData);

