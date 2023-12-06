
function randInt(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
}
var num1 = randInt(300,600);
var num2 = randInt(100,num1);
var num3 = randInt(1,10);

document.getElementById("s1").textContent = num1.toString();
document.getElementById("s2").textContent = num2.toString();
document.getElementById("s3").textContent = num3.toString();

// Generate correct answer

document.querySelector('[value ="1"]').nextSibling.nodeValue = num1.toString() + " - " + (num2 + num3).toString();
document.querySelector('[value ="2"]').nextSibling.nodeValue = num1.toString() + " - " + (num2 - num3).toString();
document.querySelector('[value ="3"]').nextSibling.nodeValue = num1.toString() + " - " + num2.toString() +  " - " + num3.toString();
document.querySelector('[value ="4"]').nextSibling.nodeValue = num1.toString() + " - " + num2.toString() +  " + " + num3.toString();

function changeStyle(e){
    e.preventDefault();
    if (this.getAttribute("class") == "answer selected"){
        this.setAttribute("class", "answer");
    } else {
        this.setAttribute("class", "answer selected");
    } // End of if
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'}], {duration:3000, fill:"forwards"});
} // End of func changeStyle

for(var i = 0; i < 4; i++){
    document.getElementsByName("ans")[i].addEventListener('click', changeStyle, false);
}