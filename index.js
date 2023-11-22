// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even, and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("Are the numbers over 25? " + (isOver25))

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log((isValid) + "\n");

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//Answers to Part 1 of assignment

    //check if all numbers declared are divisible by 5
    const divBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
    console.log("Are all declared numbers divisible by 5? " + (divBy5));

    //check if first number is larger than last
    const firstLargerThanLast = n1 > n4;
    console.log("Is the first number larger than the last? " + (firstLargerThanLast));

    //arithmitic chain
    const arithmeticChain = ((((n2-n1))*(n3))%(n4));
    console.log("((n2 - n1) * n3) / n4 = " + (arithmeticChain));

    //modify isOver25 to be less than or equal to 25
    const isUnderOrEqualTo25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
    console.log("Are the numbers under or equal to 25? " + (isUnderOrEqualTo25) + "\n")

//Answers to Part 2 of assignment

    //declare variables
    const totalTripDistance = 1500;
    const fuelBudget = 175;
    const avgFuelCost = 3;

    const fuelEfficiency1 = 30;
    const fuelEfficiency2 = 28;
    const fuelEfficiency3 = 23;

    const speed1 = 55;
    const speed2 = 60;
    const speed3 = 75;

    //travelling at 55 miles an hour

        //calculate cost
        let result1 = ((totalTripDistance / fuelEfficiency1) * 3);
        console.log("If you are travelling at 55mph, it will cost about $" + Math.ceil((result1)) + ".");

        //will we be in budget?
        console.log("Is this within our $175 budget? " + (result1 < fuelBudget));

        //how long will the trip take?
        console.log("The trip will take about " + Math.ceil((totalTripDistance / speed1)) + " hours." + "\n");


    //travelling at 60 miles an hour

        //calculate cost
        let result2 = ((totalTripDistance / fuelEfficiency2) * 3);
        console.log("If you are travelling at 60mph, it will cost about $" + Math.ceil((result2)) + ".");

        //will we be in budget?
        console.log("Is this within our $175 budget? " + (result2 < fuelBudget));

        //how long will the trip take?
        console.log("The trip will take about " + Math.ceil((totalTripDistance / speed2)) + " hours." + "\n");


    //travelling at 75 miles an hour

        //calculate cost
        let result3 = ((totalTripDistance / fuelEfficiency3) * 3);
        console.log("If you are travelling at 75mph, it will cost about $" + Math.ceil((result3)) + ".");

        //will we be in budget?
        console.log("Is this within our $175 budget? " + (result3 < fuelBudget));

        //how long will the trip take?
        console.log("The trip will take about " + Math.ceil((totalTripDistance / speed3)) + " hours.");


