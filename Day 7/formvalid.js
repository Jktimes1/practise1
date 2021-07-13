const name1=document.getElementsByClassName("name");
const age=document.getElementsByClassName("age");
const form1= document.getElementsByClassName("submit");

//form1.addEventListner('click',validfunc);
var s;
function validfunc(e){
    console.log(age.value);
    console.log(name1.value);
    if(age.value>18){
        console.log("submitted");
        s="valid voter";
    }
    else{
        console.log("Invalid voter");
        s="Invalid voter";
    }
  //  e.preventDefault();
    
}

