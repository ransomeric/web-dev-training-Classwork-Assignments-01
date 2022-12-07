//let age = 1950; //document.getElementById("age_input");

const age = document.getElementById('u-age') 

let first_gen = [1900, 1919];
let second_gen = [1920, 1929];
let third_gen = [1930, 1939];
let fourth_gen = [1940, 1949];

function calculateGeneration() {
  if (age >= 1900 && age <= 1919) {
    return "first gen";
  } else if (age >= 1920 && age <= 1929) {
    return "second gen";
  } else if (age >= 1930 && age <= 1939) {
    return "third gen";
  } else if (age >= 1940 && age <= 1949) {
    return "fourth gen";
  } else {
    return "none of the above";
  }
}

let x = calculateGeneration();
console.log(x);
