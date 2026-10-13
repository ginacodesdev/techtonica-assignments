// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter = 1;
while (counter >=1 && counter <= 5){
    console.log(counter);
    counter++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
do {
    console.log(counter);
    counter++;
} while (counter >=1 && counter <= 5);
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (counter = 1; counter <= 5; counter++){
    console.log(counter);
}
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//the while loop 
counter = 10;
while (counter >=1){
    console.log(counter);
    counter--;
}
//do while loop 
counter = 10 
do {
    console.log(counter);
    counter--;
} while (counter >=1);

//for loop 
for (counter = 10; counter >= 1; counter--){
    console.log(counter);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//the while loop 
counter = 7;
while (counter >=7 && counter <= 27){
    console.log(counter);
    counter++;
}
//do while loop 
counter = 7 
do {
    console.log(counter);
    counter++;
} while (counter >=7 && counter <= 27);

//for loop 
for (counter = 7; counter <= 27; counter++){
    console.log(counter);
}


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//the while loop 
counter = 10;
while (counter >=0 && counter <= 100){
    console.log(counter);
    counter += 10;
}
//do while loop 
counter = 10 
do {
    console.log(counter);
    counter += 10;
} while (counter >= 0 && counter <= 100);

//for loop 
for (counter = 10; counter <= 100; counter += 10){
    console.log(counter);
}


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour > -100) { //the loop was infinite because there was no stopper; anything under the negative value would continue running.
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favInteger = 7;
counter = 0;
while (counter <= favInteger){
    console.log(counter);
    counter++;
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
favInteger = 7;
counter = 0;
do {
    if (counter === favInteger) {
        console.log(`${counter} my favorite number!`);
    } else {
        console.log(`${counter} not my favorite number`);
    } 
    counter++;
} while (counter >= 0 && counter <= 100);


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

//for loop: the number of times i know i want it to repeat is best for this one 
//while loop: best use is while my condition is being met, run this loop
//do loop: best to use this when i need something to occur and then the condition is checked 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >=1; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Commit your file to GitHub.