// JavaScript Document

var bill = prompt("How much is the bill?");
var percent = prompt("How much would you like to tip?");
var tip = percent_amount(Number(bill),Number(percent));
var total = total_with_grat(Number(bill),Number(tip));

function percent_amount(x,y){
    return x * (y/100);
}
function total_with_grat(a,b){
    return a+b;
}

alert("You want to give a $" + tip.toFixed(2) + " tip. Good for you! Spread the wealth richie pants.");
alert("Your total bill is $" + total.toFixed(2) + ". You rich fart!");
