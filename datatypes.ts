//String
let newString: String = 'HelloWorld';
console.log('String: ' + newString);
console.log('Sub String: ' + newString.substr(1, 3));
console.log('charAt: ' + newString.charAt(0));

//Number
let newNumber: Number = 10.8788;
console.log('Number: ' + newNumber);
console.log('Fixed Number: ' + newNumber.toFixed(2));
console.log('Precision Number: ' + newNumber.toPrecision(2));

//Boolean
let newBoolean: Boolean = true;
console.log('Boolean: ' + newBoolean);

//Set method
let mySet = new Set();
mySet.add(newString);
for (let i of mySet) {
    console.log(i);
}


//Arrays
let myNumberArray: Number[] = [3, 1, 9, 5, 6, 8, 55];
let myStringArray: String[] = ['India', 'Russia', 'China'];

myStringArray.push('USA');
myNumberArray.push(43, 4);
myNumberArray.pop();

console.log(myStringArray);
console.log(myNumberArray);

for (let elements of myStringArray) {
    console.log(elements);
}

//template string example
const myName: String = 'Lokesh';
const myAge: Number = 35;
let message: String = `My name is ${myName} and my age is ${myAge}`;
console.log(message);       //My name is Lokesh and my age is 35


//spread operator example
var numbers: Number[] = [1, 2, 3, 4, 5];
console.log(...numbers);      //1 2 3 4 5

/*What is a Callback?
Simply put:
A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
More complexly put:
In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.
Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.
*/

function doHomework(subject: any, callback: any) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
//A Callback function which will be passed as an argument in doHomework function.
function finish() {
    console.log('Finished my homework.');
}

doHomework('math', finish);

















//////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let index = 0; index < newString.length; index++) {
    const element = newString[index];
    if (newString.charAt(index) == newString.charAt(index + 1)) {

    }

}

