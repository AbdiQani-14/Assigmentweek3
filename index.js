/* ============================================================
   Week 3 — JavaScript Basics
   ------------------------------------------------------------
   Open the CodePen Console (bottom of the screen) to see output.
   Save the pen to run your code again.
   ============================================================ */


/* ------------------------------------------------------------
   Task 1: Greeting Generator 👋

   Log a friendly greeting using the name.

   Expected output: "Hello, Fatuma! Welcome back."
   ------------------------------------------------------------ */

const name = "Fatuma";
const helo = "Hello, Fatuma! Welcome back."

console.log(helo);

// ✍️ Solve it here ✍️




/* ------------------------------------------------------------
   Task 2: Even or Odd ⚖️

   Log "[number] is even." or "[number] is odd."

   Hint: use number % 2 === 0
   ------------------------------------------------------------ */

const number = 7;

if (number % 2 === 0) {
    console.log(" number  is even")
} else {
    console.log("number  is odd ")
}
// ✍️ Solve it here ✍️




/* ------------------------------------------------------------
   Task 3: Movie Rating Classifier 🎬

   Convert the rating into a one-word verdict:
     9-10 → "Amazing"
     7-8  → "Good"
     5-6  → "Okay"
     0-4  → "Skip it"

   Use if / else if / else.
   ------------------------------------------------------------ */

// const rating = 6;


// ✍️ Solve it here ✍️

const rating = 6;

if (rating >= 9 && rating <= 10) {
    console.log("Amazing")

} else if (rating >= 7 && rating <= 8) {
    console.log("Good")

} else if (rating >= 5 && rating <= 6) {
    console.log("Okay")

} else if (rating >= 0 && rating <= 4) {
    console.log("Skip it")
} else {
    console.log("NOT Rating")
}










/* ------------------------------------------------------------
   Task 4: Login Validator 🔐

   Both email AND password must match.
   Log "Login successful" or "Wrong email or password".

   Hint: use && to combine the two checks.
   ------------------------------------------------------------ */

//const correctEmail = "fatuma@example.com";
//const correctPassword = "secret123";

// const enteredEmail = "fatuma@example.com";
// const enteredPassword = "wrongpass";

// ✍️ Solve it here ✍️

const correctEmail = "fatuma@example.com";
const correctPassword = "secret123";

const enteredEmail = "fatuma@example.com";
const enteredPassword = "wrongpass";


if (correctEmail === "fatuma@example.com" && correctPassword === "secret123") {
    console.log("Login successful")

}





/*  else if (enteredEmail == && enteredPassword == ) {

} */
else if (enteredEmail === "fatuma@example.com" && enteredPassword === "wrongpass") {
    console.log("Wrong email or password")

}






/* ------------------------------------------------------------
   🚀 STRETCH (optional): Discount Calculator

   Given a price and a discount percent, log the final price.
   Example: price 100, discount 20 → "Final price: $80"
   ------------------------------------------------------------ */



// ✍️ Stretch: solve it here ✍️