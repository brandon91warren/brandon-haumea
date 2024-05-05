// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create a new 'footer' element
    var footerElement = document.createElement("footer");
    // Set some content or attributes for the footer if needed
    footerElement.textContent = "";

    // Get the <body> element
    var bodyElement = document.body;

    // Append the 'footer' element as the last child of the <body> element
    bodyElement.appendChild(footerElement);

    // Create a new Date object to get the current year
    var currentDate = new Date();
    var thisYear = currentDate.getFullYear();

    // Select the footer element using querySelector
    var footer = document.querySelector("footer");

    // Create a new paragraph element for the copyright notice
    var copyright = document.createElement("p");
    copyright.innerHTML = "&#169; Brandon Warren " + thisYear;

    // Append the copyright element to the footer
    footer.appendChild(copyright);

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

    // Select the #messages section by id
    var messageSection = document.getElementById("messages");

    // Select the <ul> element within the messageSection
    var messageList = messageSection.querySelector("ul");

    // Function to update visibility of messages section
    function updateVisibility() {
        // Check if the messageList is empty
        if (messageList.children.length === 0) {
            messageSection.style.display = "none"; // Hide the messages section
        } else {
            messageSection.style.display = "block"; // Show the messages section
        }
    }

    // Function to create and add a new message
    function createNewMessage(usersEmail, usersName, usersMessage) {
        // Create a new list item element for a new message
        var newMessage = document.createElement("li");
        newMessage.innerHTML = `
            <a href="mailto:${usersEmail}">${usersName}</a>
            <span>${usersMessage}</span>
        `;

        // Create a new button element for editing messages
        var editButton = document.createElement("button");
        editButton.innerText = "edit";
        editButton.type = "button";

        // Add event listener to the editButton
        editButton.addEventListener("click", function() {
            var newMessageText = prompt("Enter the new message:");
            if (newMessageText !== null && newMessageText !== "") {
                newMessage.querySelector("span").textContent = newMessageText;
            }
        });

        // Create a new button element for removing messages
        var removeButton = document.createElement("button");
        removeButton.innerText = "remove";
        removeButton.type = "button";

        // Add event listener to the removeButton
        removeButton.addEventListener("click", function() {
            // Find the button's parent element using DOM Traversal
            var entry = removeButton.parentNode;

            // Remove the entry element from the DOM
            entry.remove();

            // Update visibility after removing an entry
            updateVisibility();
        });

        // Append the editButton and removeButton to the newMessage
        newMessage.appendChild(editButton);
        newMessage.appendChild(removeButton);

        // Append the newMessage to the messageList
        messageList.appendChild(newMessage);

        // Update visibility after adding a new message
        updateVisibility();
    }

    // Example of creating a new message
    createNewMessage("");
});