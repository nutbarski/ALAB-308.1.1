//declare variables
let testValue1 = 1;
const definiteValue = 2;
let wordValue = "Hello";
let letterValue1 = "a";
let letterValue2 = "b";

const haiku = 
`Yesterday it worked.
Today it is not working.
Windows is like that.`;

//begin calculations

//arithmetic
console.log("Sum of testValue1 & definiteValue: " + (testValue1 + definiteValue));

//comparison
if (letterValue1 > letterValue2) {
    console.log("letterValue1 is greater than letterValue2");
}
else
{
    console.log("letterValue1 is less than letterValue2");
}

//string concatenation
console.log("This is a string " + "concatenation!");

//escape sequence
console.log("\"escape sequences\" are important!");

//template literal
console.log(haiku);
