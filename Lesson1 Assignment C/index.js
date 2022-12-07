var status = true;


document.getElementById("Button").disabled = true;






function status(on)
{
    if(document.getElementById("miktar").value.length == 0){
        status  &= true;
        }
    else{
        status = false;
    }

    if(document.getElementById("saat").value.length == 0){
        status &= true;
        }
    else{
        status = false;
    }

  document.getElementById("Submit").disabled = status;
}