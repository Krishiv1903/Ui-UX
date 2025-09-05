/* i. Arithmetic */
function calculate() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let out = "";
    out += `Sum = ${a + b}\n`;
    out += `Difference = ${Math.abs(a - b)}\n`;
    out += `Product = ${a * b}\n`;
    out += `Quotient = ${a / b}`;
    document.getElementById("result1").innerText = out;
}

/* ii. Array Operations */
function arrayOperations() {
    let arr = [23, 5, 89, 12, 44];
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    let ascending = [...arr].sort((a, b) => a - b);
    let descending = [...arr].sort((a, b) => b - a);

    let out = `Original Array: ${arr}\n`;
    out += `Largest: ${largest}\nSmallest: ${smallest}\n`;
    out += `Ascending: ${ascending}\nDescending: ${descending}`;
    document.getElementById("result2").innerText = out;
}

/* iii. Form Validation */
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = parseInt(document.getElementById("age").value);

    let out = "";
    if (name === "") {
        out = "Name cannot be empty.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        out = "Invalid email format.";
    } else if (isNaN(age) || age < 18 || age > 100) {
        out = "Age must be between 18 and 100.";
    } else {
        out = "Form submitted successfully!";
    }
    document.getElementById("result3").innerText = out;
    return false; // prevent form refresh
}

/* iv. Student Object */
function studentOperations() {
    let student = {
        name: "Alice",
        age: 20,
        grade: "B"
    };
    student.class = "CS101"; 
    student.grade = "A";    

    let out = `Name: ${student.name}\n`;
    out += `Age: ${student.age}\n`;
    out += `Grade: ${student.grade}\n`;
    out += `Class: ${student.class}`;
    document.getElementById("result4").innerText = out;
}

/* v. Array Functions */
function processArray() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let evenNumbers = arr.filter(num => num % 2 === 0);
    let doubled = evenNumbers.map(num => num * 2);
    let sum = doubled.reduce((acc, val) => acc + val, 0);

    let out = `Original: ${arr}\nEven: ${evenNumbers}\nDoubled: ${doubled}\nSum: ${sum}`;
    document.getElementById("result5").innerText = out;
}