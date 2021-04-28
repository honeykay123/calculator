// var input=prompt("Enter \"add\", \"sub\", \"mul\", and \"div\" to selet your operation");

var sub1=Number(prompt("Enter your First Number"));
var sub2=Number(prompt("Enter your second Number"));
var sub3=Number(prompt("Enter your Third Number"));

function input(sub1=0,sub2=0,sub3=0){
    var input=sub1-sub2-sub3
    alert(input);
    alert("You just did Substraction");
}
input(sub1,sub2,sub3);