

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

var ourArray02 = ["france" , "Portugal" , 32];
ourArray02.push(["Germany", 54]);

var myArray03 = [3,2,4];
var removedFromMyArray03 = myArray03.pop();   //removedFromMyArray03 now equals 3, and myArray03 now equals [3,2]
var removeTheFirstElement = myArray03.shift();  
var unShiftedMyArray03 = myArray03.unshift("rea");   // add an element to the beginning of the array

 function funstionWithArgs(a , b) {
     console.log(a + b);
    
}

funstionWithArgs(45 , 54);

var myGlobal = 33; 

function fun1() {
  var oopsGlobal = 6;           //without the var keyword it becomes global variable automatically but now it is local
    
}

function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();    // the scope of the oppsGlobal is not global, therefore the output is undefined

//Return a value from a function
function minusSeven(num) {
    return num - 7 ;
    
}
console.log(minusSeven(52));

function timesFive(num01) {
    return num01 * 5 ;
    
}
console.log(timesFive(4));

//understanding undefined value returned from a function
var sum = 0 ; 
function addThree() {
    sum += 8 ; 
    }
console.log(addThree());

//Assignment with a return value
var changed = 0; 

function change(num02) {
    return (num02 + 8 )/ 7 ;
      
}
changed = change(43);

var processed = 0 ; 

function processArg(num03) {
    return(num03 + 9) / 4 ; 
    
}

processed = processArg(6);

//Stand in Line
function nextInLine(arr, item) {
    arr.push(item)
    return item;
}

var testArr = [1,3,34,4,3,8,6];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,5));
console.log("After: "+ JSON.stringify(testArr));

console.log(changed);
console.log(processed);
console.log(myArray03);
console.log(unShiftedMyArray03);           
console.log(removeTheFirstElement);       // shift function removes the first element
console.log(removedFromMyArray03);        // pop function removes the final element from the array
console.log(myArray03);
console.log(ourArray02);
console.log(wordBlanks("pony", "small" , "is eating" , " slowly."));

console.log(lastLetterOfFirstName);
console.log(secondToLastLetterOfLastName);

console.log("Created");
console.log(quotes);
console.log(myData);


//Boolean values
function WelcomeToBooleans() {
    return true;
}

//conditional logic with if statement
function ourTrueOrFalse(isItTrue) {
    if(isItTrue){
        return "The truth";
    }
    return "no it is false"; 
}
console.log(ourTrueOrFalse(false));

function trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {
        return "yes , true" ;
    }
    return "No , false";
    
}
console.log(trueOrFalse(true));

//Comparison with the equality operator
function testEqual(val) {
    if (val == 14) {
        return "Equal";
        
    }
    return "unequal";
    
}

console.log(testEqual(43));

//Comparison with the strict equality operator makes sure the types are equal
function strictEqual(val) {
    if (val === 65) {
        return "Equal";
        
    }
    return "unequal";
    
}

console.log(testEqual('65'));

//Comparison with the strict inequality operator
function testStrictNoEqual(val01) {
    if (val01 !== 33) {
        return  "strictly Not equal"
        
    }
    return "equal";
    
}

console.log(testStrictNoEqual(32));

//Comparison with the logical AND operator
function testLogicalAND(val02) {
    if(val02 <34 && val02 >= 56) {
        return "done"
    }

    return "undone"
    
}

console.log(testLogicalAND(58))

//else if
function orderMyLogic(val03) {
    if (val03 < 43) {
        return "less"
    } else if(val03 < 23){
        return "Enhanced"
        
    }else {
        return "Rotate"
    }
    
}

//Switch statement
function caseInSwitch(val04) {
    var answer = "";
    switch(val04){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Sigma";
            break;
        
    }

    return answer;
    
}

console.log(caseInSwitch(3)); 

//Default option in Swith Statement
function SwitchOfStuff(val05) {
    var answer = "";
    switch (val05) {
        case "a":
            answer = "appricot";
            break;
        case "t":
            answer = "tangerine";
            break;
        default:
            answer = "stuff";
            break;
    } 
    return answer;
}

console.log(SwitchOfStuff("t"));

//Multiple identical options in Switch statements
function sequesntialSizes(val06) {
    var answer = "";
    switch (val06) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
    
        default:
            answer = "Please enter the correct value";
            break;
    }
    return answer;
}

console.log(sequesntialSizes(45));

//change chain of if-else to switch
function chainToSwitch(val07) {
    var answer = "";

    switch (val07) {
        case "bob":
            answer = "Marley";
            break;

        case "eagle":
            answer = "fly";
            break;
    
        default:
            answer = "You need to enter the answer correctly";
            break;
    }
    return answer;
    
}
console.log(chainToSwitch("bob"));

//Returning boolean values from functions
function isLess(a,b) {
    if (a < b) {
        return true;
        
    }else {
        return false;
    }
    
}

console.log(isLess(10,44));

//Can be written like this
function isLess01(f,n) {
    return f > n ;
    
}

console.log(isLess01(35 , 3));

//Returning early pattern from functions
function dsTest(d, s) {
   if (d < 0 || s < 0 ) {
       return undefined;
       
   }

    return Math.round(Math.pow(Math.sqrt(d)+ Math.sqrt(s), 4));
}

console.log(dsTest(3,6));

//Counting cards
var count = 0; 
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;    
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    
        default:

            break;
    }
    var holdbet = 'hold';
    if (count > 0 ) {
        holdbet = 'Bet'
        
    }
    return count + "" + holdbet;
    
}

cc(3); cc('K'); cc('2');
console.log(cc(7));

//Build JavaScript objects
var myFish = {
    "name" : "Graham",
    "fins" : 8 , 
    "friends" : ["everything!"] 
} ;

//Accessing object properties with dot notation
var fishFinder = myFish.fins;

//Accessing object properties with Bracket notation
var fishFinder = myFish["friends"];

//Accessing object properties with variables
var fisheries = "name";
var fisher = myFish[fisheries];

console.log(fisher);

//updating object properties
myFish.fins = 9 ;

//Add new properties to an object
myFish["tail"] = 1 ; 

//delete properties from an object
delete myFish.tail;

//using objects for lookups
function phoneticLookup(val08) {
    var result = "";

    var lookup = {
        "sigma" : "charls", 
        "kate" : "brave"
    };
    result = lookup[val08];
    return result;    
}

console.log(phoneticLookup("kate"));

//testing objects for properties
var myObj = {
    gift : "loop",
    platinuim : "brand"
};


function checkObj(checkProp) {

  if ( myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
  } else {
      return "Not Found"
  }
    
}

console.log(checkObj("gama")); 

//Manipulating complex objects
var myMusic = [          // An array consisting of two objects
    {
    "artist" : "Bruce Springsteen", 
    "release_year" : 1968
    } , 
    {
    "artist" : "AC/DC",
    "title" : "You've been hit by a thunderstruck"
    }
]

//Accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside" : {
            "trunk": "jack"
        }

    }

};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

//Accessing Nested Arrays
