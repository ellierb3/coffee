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


const suggest = document.querySelector('#suggest');
const heading = document.querySelector('#heading');
suggest.onclick = function () {
    let question =prompt('What should we add to the menu?');
    alert('You suggested ' + question + ', check back for menu updates soon!');
    heading.textContent = 'Thanks for your input';
}