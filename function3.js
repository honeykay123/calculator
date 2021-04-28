var sum1=Number(prompt("Enter your First Number"));
var sum2=Number(prompt("Enter your second Number"));
var sum3=Number(prompt("Enter your Third Number"));

function input(sum1=0,sum2=0,sum3=0){
    var input=sum1+sum2+sum3
    alert(input);
    alert("You just did Addition");
}
input(sum1,sum2,sum3);