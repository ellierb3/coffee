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