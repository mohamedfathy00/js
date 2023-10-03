// console.log("mohamed fathy");


//alert("alaa");
//document.write("mohamed")

// document.getElementById("iddd").innerHTML="adam badwy"



// all task down
// nember 1
function calculateAverage(numbers) {
    if (numbers.length < 10) {
        return "Error: At least 10 numbers are required.";
    }

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    let average = total / numbers.length;
    return average;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let average = calculateAverage(numbers);
console.log("The average of the numbers is:", average);

// nember 2
function calculateTriangleArea(base, height) {
    if (base < 0 || height < 0) {
        return "Error: Base and height must be non-negative numbers.";
    }

    let area = 0.5 * base * height;
    return area;
}

let base = 10;
let height = 20;
let area = calculateTriangleArea(base, height);
console.log("The area of the triangle is:", area);

// nember 3
function calculateAgeInDays(ageInYears) {
    if (ageInYears < 0) {
        return "Error: Age must be a non-negative number.";
    }

    const daysInYear = 365;
    const ageInDays = ageInYears * daysInYear;

    return ageInDays;
}

const ageInYears = 35;
const ageInDays = calculateAgeInDays(ageInYears);
console.log(`The age in days is: ${ageInDays}`);

// nember 4
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Error: Both inputs must be numbers.';
    }

    return num1 + num2;
}

const num1 = 5;
const num2 = 10;
const sum = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

// nember 5
function getFirstElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Error: Input must be a non-empty array.';
    }

    return arr[0];
}

const nums = [5, 10, 15, 20];
const firstElement = getFirstElement(nums);
console.log(`The first element of the array is: ${firstElement}`);

// nember 6
function showMyName() {
    var myName = "mohamed fathy";
    document.getElementById("myName").innerHTML = myName;
}

// nember 7
function convertHoursToSeconds(hours) {
    if (typeof hours !== 'number' || hours < 0) {
        throw new Error('Invalid input. Please enter a non-negative number.');
    }

    const minutes = hours * 60;
    const seconds = minutes * 60;

    return seconds;
}

// Test the function
console.log(convertHoursToSeconds(1)); // Output: 3600
console.log(convertHoursToSeconds(2)); // Output: 7200
console.log(convertHoursToSeconds(3)); // Output: 10800

// nember 8
function checkSum(num1, num2, num3, num4) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' || typeof num4 !== 'number') {
        throw new Error('Invalid input. Please enter four numbers.');
    }

    const sum1 = num1 + num2;
    const sum2 = num3 + num4;

    return sum1 + sum2 > 400;
}

// Test the function
console.log(checkSum(100, 200, 300, 500)); 
 

// nember 9
function isZero(num) {
    if (typeof num !== 'number') {
        throw new Error('Invalid input. Please enter a number.');
    }

    return num === 0;
}

// Test the function
console.log(isZero(0)); // Output: true
console.log(isZero(10)); // Output: false

// nember 10
function findRemainder(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Invalid input. Please enter two numbers.');
    }

    return num1 % num2;
}

// Test the function
console.log(findRemainder(10, 3)); // Output: 1
console.log(findRemainder(15, 4)); // Output: 3

// nember 11
function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else if (num1 < num2) {
        console.log(num2 + " is greater than " + num1);
    } else {
        console.log("Both numbers are equal");
    }
}

// Test the function
findLargest(10, 3); // Output: 10 is greater than 3
findLargest(15, 4); // Output: 15 is greater than 4
findLargest(7, 7); // Output: Both numbers are equal


// nember 12
function checkNumber(input) {
    if (typeof input === 'number') {
        console.log('Input is a number');
    } else {
        console.log('Input is not a number');
    }
}

// Test the function
checkNumber(10); // Output: Input is a number
checkNumber('Hello'); // Output: Input is not a number



// nember13
function getCurrentDate() {
    return new Date();
}

console.log(getCurrentDate());

