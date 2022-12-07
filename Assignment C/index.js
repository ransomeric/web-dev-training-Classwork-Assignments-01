const submitBtn = document.getElementById('Save')
const uName = document.getElementById('u-name')
const uAge = document.getElementById('u-age')


// run this function whenever the values of any of the above 2 inputs change.
// this is to check if the input for all 2 is valid.  if so, enable submitBtn.
// otherwise, disable it.

const checkEnableButton = () => {
  submitBtn.disabled = !(
      uName.value && 
      uAge.value 
   )
}

uName.addEventListener('change', checkEnableButton)
uAge.addEventListener('change', checkEnableButton)




document.getElementById("Save").addEventListener("click", function(event){
  event.preventDefault();
  const age = document.getElementById('u-age').value 


const NameValue = document.getElementById('u-name').value
const calculatedAge = 2022 - parseInt(age);
  console.log({age, calculatedAge})
  if (calculatedAge >=  1901 && calculatedAge<=   1909 ) {
    alert("Hi " + NameValue + " You belong to Gen Z Generation");
  
  } else if (calculatedAge >= 1925 && calculatedAge >= 1945){
    alert ("Hi " + NameValue + " You belong to the Silent Generation. ");
    
  }
  else if (calculatedAge >=  1946  && calculatedAge >=  1964){
    alert ("Hi " + NameValue + " You belong to the Baby Boomer Generation.");
    
  }
  else if (calculatedAge >= 1965  && calculatedAge >=  1974){
    alert ("Hi " + NameValue + " You belong to Generation X. ");
   
  }
  else if (calculatedAge >=  1975  && calculatedAge >=  1984){
    alert ("Hi " + NameValue + " You belong to the Xennials Generation. ");
 
  }
  else if (calculatedAge >= 1985 && calculatedAge >=  1994){
    alert ("Hi " + NameValue + " You belong to the Millennials Generation .");
   
  }
  else if (calculatedAge >= 1995  && calculatedAge >= 2012){
    alert ("Hi " + NameValue + " You belong to Gen Z Generation. ");
    
  }
  else if (calculatedAge <= 2013) {
    alert( "Hi " + NameValue + "You belong to Gen Alpha Generation.") ;

  } else if (calculatedAge < 98) {
    alert("Hi " + NameValue + "! You are <age> years old ") ;
  } else {
    alert("none of the above") ;
  }
});


// function calculateGeneration() {
 
//   if (calculatedAge >= 1995 && calculatedAge<=  2012) {
//     alert = ("Hi " + NameValue + " You belong to Gen Z Generation");
  
//   } else if (calculatedAge >=  1995 && calculatedAge <=  2012) {
//     alert = ("HI " + NameValue + "hello");
//   } else if (calculatedAge <=2013) {
//     return "third gen";
//   } else if (calculatedAge>= 1992 && calculatedAge <= 1998) {
//     return "fourth gen";
//   } else {
//     return "none of the above";
//   }
 
// }





