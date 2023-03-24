
// Get the number from the calculator

document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save-button");
    const display = document.getElementById("display");

    saveButton.addEventListener("click", function() {
    console.log(display.value);
    });
});

//

function openGoogleSearch() {
    // Get the number from the calculator
    var number = output.value;

    // Generate the Google search URL
    var url = 'https://www.google.com/search?q=' + number;

    // Open a new window with the Google search URL
    window.open(url);
}

//

function onClickEvent() {
    const el = document.createElement("p");
    el.innerText = output.value;
    document.querySelector('.saved-history').appendChild(el);
}

document.querySelectorAll('input').onclick = onClickEvent;


function JavaBlink() {
    var blinks = document.getElementsByTagName('JavaBlink');
    for (var i = blinks.length - 1; i >= 0; i--) {
       var s = blinks[i];
       s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    window.setTimeout(JavaBlink, 1000);
 }
 if (document.addEventListener) document.addEventListener("DOMContentLoaded", JavaBlink, false);
 else if (window.addEventListener) window.addEventListener("load", JavaBlink, false);
 else if (window.attachEvent) window.attachEvent("onload", JavaBlink);
 else window.onload = JavaBlink;