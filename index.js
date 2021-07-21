yes.onclick = function () {
    alert('Thats the right answer!');
    displaybox.textContent = 'YAY!';
}

no.onclick = function () {
    alert('oh no..no..that just wont do..')
    displaybox2.textContent = ':(';
}




function changeImage() {
    var image = document.getElementById("questionmark");
    if (image.src.match("happycoffee")) {
        image.src = "questionmark.png";
    } else {
        image.src = "happycoffee.png";
    }
}



submit.onclick = function() {
    alert('Testing');
}

submitform.onclick = function() {
    alert('Thanks for signing up for our Newsletter');
}


function submitformpls() {
    var x = document.getElementById("email").required;
  }

submitformpls.onclick = function() {
      alert("Git it!");
  }


const suggest = document.querySelector('#suggest');
const heading = document.querySelector('#heading');
suggest.onclick = function () {
    let question =prompt('What should we add to the menu?');
    alert('You suggested ' + question + ', check back for menu updates soon!');
    heading.textContent = 'Thanks for your input';
}



function bagel() {
    var bageltype = document.getElementById("guessWhich").value;
    var text;

    if (bageltype === "blueberry"){
        text = "Yes! Blueberry is the best seller!";
    }
    else if (bageltype === "cinnamon raisin"|| bageltype === "everything"){
        text = "Good try but nope!";
    }
    else {
        text = "Hey that wasnt an option.."
    }
    document.getElementById("tester").innerHTML = text;

}