
const loadbtn = document.getElementById("loadbtn");
const changes = document.getElementById("changes");

const message = document.getElementById("Message");
const profile = document.getElementById("profile");
const grades = document.getElementById("grades");
const schedule = document.getElementById("schedule");

// LOAD BUTTON
loadbtn.addEventListener("click", function () {
    message.textContent = "Data Loaded Successfully!";

    profile.textContent = "Profile: John Paul";
    grades.textContent = "Grades: 95";
    schedule.textContent = "Schedule: 8:00 AM - 5:00 PM";

    message.style.color = "green";
});

// CLICK BUTTON
changes.addEventListener("click", function () {
    message.textContent = "The content has been changed!";

    profile.textContent = "Profile: Updated";
    grades.textContent = "Grades: Updated";
    schedule.textContent = "Schedule: Updated";

    message.style.color = "royalblue";
});
