




function changeImage() {
    var image = document.getElementById("questionmark");
    if (image.src.match("happycoffee")) {
        image.src = "questionmark.png";
    } else {
        image.src = "happycoffee.png";
    }
}






const suggest = document.querySelector('#suggest');
const heading = document.querySelector('#heading');
suggest.onclick = function () {
    let question =prompt('Menu suggestion? Let us know below!');
    alert('You suggested ' + question + '! Check back for menu updates soon!');
    heading.textContent = 'Thanks for your input';
}



function bagel() {
    var bageltype = document.getElementById("guessWhich").value;
    var text;

    if (bageltype === "blueberry"){
        text = "Yes! Blueberry is the best seller!";
    }
    else if (bageltype === "cinnamon raisin"|| bageltype === "everything"){
        text = "Good try but not quite!";
    }
    else {
        text = "Hey that wasnt an option.."
    }
    document.getElementById("tester").innerHTML = text;

}

