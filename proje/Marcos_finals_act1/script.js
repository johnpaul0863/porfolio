
const nickname = document.getElementById("Nickname");
const year = document.getElementById("year");
const output = document.getElementById("Output");
const text1 = document.getElementById("text1");
const container = document.querySelector(".containers");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// Create a result message
const result = document.createElement("p");
result.id = "result";
container.appendChild(result);

// CLICK BUTTON
btn1.addEventListener("click", function () {
    const name = nickname.value.trim();
    const selectedYear = year.value;

    if (name === "") {
        result.textContent = "Please enter your nickname!";
        return;
    }

    if (selectedYear === "Select year") {
        result.textContent = "Please select your year!";
        return;
    }

    output.textContent = name;
    text1.textContent = "BS Information Technology - " + selectedYear;
    result.textContent = "Welcome, " + name + "!";
});

// DOUBLE CLICK BUTTON
btn2.addEventListener("dblclick", function () {
    output.textContent = "John Paul";
    text1.textContent = "BS Information Technology";
    result.textContent = "Profile name has been reset!";
});

// PRESS AND HOLD BUTTON
function startHold() {
    container.style.backgroundColor = "#dbeafe";
    result.textContent = "You are pressing and holding!";
}

function endHold() {
    container.style.backgroundColor = "white";
    result.textContent = "You released the button!";
}

btn3.addEventListener("mousedown", startHold);
btn3.addEventListener("mouseup", endHold);
btn3.addEventListener("mouseleave", endHold);

// Support touchscreens
btn3.addEventListener("touchstart", function (event) {
    event.preventDefault();
    startHold();
}, { passive: false });

btn3.addEventListener("touchend", endHold);
btn3.addEventListener("touchcancel", endHold);
