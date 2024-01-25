// function change(){

//         number = document.formse.number.value;
//         bool = document.formse.bool.value;
//         string = document.formse.string.value;
//         document.getElementById("hasil").innerHTML = anumber + " " + typeof(anumber) + " | " + aboolean + " " + typeof(aboolean)


// }


var userInput = prompt("Masukan angka atau huruf");
if (!isNaN(userInput)){
    console.log("This is a number")
} else  {
    console.log("This is string")
}
