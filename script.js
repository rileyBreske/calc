

document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save-button");
    const display = document.getElementById("display");

    saveButton.addEventListener("click", function() {
    console.log(display.value);
    });
});


function openGoogleSearch() {
    // Get the number from the calculator
    var number = output.value;

    // Generate the Google search URL
    var url = 'https://www.google.com/search?q=' + number;

    // Open a new window with the Google search URL
    window.open(url);
}

