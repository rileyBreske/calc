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
    const el = document.createElement("p"); //creates new paragraph tag
    el.innerText = output.value; //fills new paragraph tag with output value from calculator
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


/**
 * adds an event listener to the document where key presses are detected and added to the
 * @returns None
 */
 document.addEventListener("keydown", function(event) {
    // Get the key code from the event object
    var key = event.key;

    // If the key is a number or an operator, add it to the display value
    if (/[0-9\+\-\*\/\.]/.test(key)) {
      display.value += key;
    }

    // If the key is the backspace key, remove the last character from the display value
    else if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    }

    // If the key is the Enter key, evaluate the display value
    else if (key === "Enter") {
      display.value = eval(display.value);
    }

    else if (key==="Escape") {
      display.value = '';
    }

  });


  document.addEventListener('DOMContentLoaded', function() {
  const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  const answerKey = ['b', 'b', 'b', 'b', 'c']; // correct answers
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const answer = quizForm[`q${i}`].value;

    if (answer === answerKey[i-1]) {
      score++;
    }
  }

  const resultMessage = `You scored ${score} out of 5.`;
  alert(resultMessage);
});
});