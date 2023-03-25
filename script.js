/**
 * Adds an event listener to the document that waits for the DOM to be fully loaded.
 * Once the DOM is loaded, it retrieves the save button and display elements by their IDs.
 * It then adds an event listener to the save button that logs the value of the display element to the console.
 * @param None
 * @returns None
 */
document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save-button");
    const display = document.getElementById("display");

    saveButton.addEventListener("click", function() {
    console.log(display.value);
    });
});


/**
 * Opens a new window with a Google search for the value in the 'output' element.
 * @returns None
 */
function openGoogleSearch() {
    // Get the number from the calculator
    var number = output.value;

    // Generate the Google search URL
    var url = 'https://www.google.com/search?q=' + number;

    // Open a new window with the Google search URL
    window.open(url);
}

/**
 * Attaches an onClick event listener to all input elements on the page. When an input element is clicked,
 * a new paragraph element is created and appended to the ".saved-history" element on the page. The innerText
 * of the new paragraph element is set to the value of the "output" element on the page.
 * @returns None
 */
function onClickEvent() {
    const el = document.createElement("p");
    el.innerText = output.value;
    document.querySelector('.saved-history').appendChild(el);
}

document.querySelectorAll('input').onclick = onClickEvent;


// nifty lil blinking downarrow || Credit: https://html-shark.com/HTML/Blinking.htm

function JavaBlink() {
    var blinks = document.getElementsByTagName('JavaBlink');
    for (var i = blinks.length - 1; i >= 0; i--) {
       var s = blinks[i];
       s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    window.setTimeout(JavaBlink, 400);
 }
 if (document.addEventListener) document.addEventListener("DOMContentLoaded", JavaBlink, false);
 else if (window.addEventListener) window.addEventListener("load", JavaBlink, false);
 else if (window.attachEvent) window.attachEvent("onload", JavaBlink);
 else window.onload = JavaBlink;