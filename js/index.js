// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create a new 'footer' element
    var footerElement = document.createElement("footer");

    // Set some content or attributes for the footer if needed
    footerElement.textContent = "This is the footer.";

    // Get the <body> element
    var bodyElement = document.body;

    // Append the 'footer' element as the last child of the <body> element
    bodyElement.appendChild(footerElement);
    // Create a new Date object and assign it to the variable 'today'
var today = new Date();

// You can also log 'today' to see the current date and time
console.log(today);
// Create a new Date object to get the current year
var currentDate = new Date();

// Get the current year using the getFullYear() method
var thisYear = currentDate.getFullYear();

// You can log 'thisYear' to verify it has the correct value
console.log(thisYear);
// Select the footer element using querySelector
var footer = document.querySelector("footer");

// You can log 'footer' to verify that it has the correct element
console.log(footer);
// Create a new paragraph element using createElement()
var copyright = document.createElement("p");

// You can log 'copyright' to verify that it is a new <p> element
console.log(copyright);
// Create a new paragraph element using createElement()
var copyright = document.createElement("p");

// Set the inner HTML of the copyright element
copyright.innerHTML = "&#169; Brandon Warren " + thisYear;

// Select the footer element using querySelector
var footer = document.querySelector("footer");

// Append the copyright element to the footer
footer.appendChild(copyright);

// You can log 'footer' to verify that the copyright element is appended to the footer
console.log(footer);

// Array of technical skills
var skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

// Select the skills section by id
var skillsSection = document.getElementById("Skills");

// Query the skillsSection to select the <ul> element
var skillsList = skillsSection.querySelector("ul");

// Loop through the skills array
for (var i = 0; i < skills.length; i++) {
    // Create a new list item element for each skill
    var skill = document.createElement("li");

    // Set the inner text of the skill item to the current skill from the array
    skill.innerText = skills[i];

    // Append the skill item to the skillsList
    skillsList.appendChild(skill);
}
});
