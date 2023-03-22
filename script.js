

document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save-button");
    const display = document.getElementById("display");

    saveButton.addEventListener("click", function() {
    console.log(display.value);
    });
});