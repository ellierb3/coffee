//suggestion box

const suggest = document.querySelector('#suggest');

suggest.onclick = function () {
    let question =prompt('Got a crazy suggestion? Let us know!');
    alert('You suggested ' + question + '! Check back for menu updates soon!');
    if (question === null|| question === '') {
        alert('Let us know if you think of something!');
    }
}

//picture that changes when you click it

const happy = document.querySelector('#happy');

function changeImage() {
    var image = document.getElementById("questionmark");
    if (image.src.match("happycoffee")) {
        image.src = "questionmark.png";
    } else {
        image.src = "happycoffee.png";
    }
    happy.textContent = 'Coffee makes us happy!';
}


//function for main page guessing game

function bagel() {
    var bageltype = document.getElementById("guessWhich").value;
    var text;

    if (bageltype === "blueberry"|| bageltype === "Blueberry"){
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

