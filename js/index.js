document.addEventListener("DOMContentLoaded", function() {
    // Prevent default refreshing behavior of the "submit" event
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default behavior of form submission
        // Get the values from the form inputs
        var usersEmail = document.getElementById("usersEmail").value;
        var usersName = document.getElementById("usersName").value;
        var usersMessage = document.getElementById("usersMessage").value;

        // Create a new list item element for a new message
        var newMessage = document.createElement("li");

        // Set the inner HTML of the newMessage element
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

        // Select the #messages section by id
        var messageSection = document.getElementById("messages");

        // Select the <ul> element within the messageSection
        var messageList = messageSection.querySelector("ul");

        // Append the newMessage to the messageList
        messageList.appendChild(newMessage);

        // Update visibility after adding a new message
        updateVisibility();

        // Clear form inputs after submission
        document.getElementById("usersEmail").value = "";
        document.getElementById("usersName").value = "";
        document.getElementById("usersMessage").value = "";
    });

    // Function to update visibility of the messages section
    function updateVisibility() {
        // Select the #messages section by id
        var messageSection = document.getElementById("messages");

        // Select the <ul> element within the messageSection
        var messageList = messageSection.querySelector("ul");

        // Check if the messageList is empty
        if (messageList.children.length === 0) {
            // Hide the messages section and header
            messageSection.style.display = "none";
            messageSection.previousElementSibling.style.display = "none"; // Hide the header
        } else {
            // Show the messages section and header
            messageSection.style.display = "block";
            messageSection.previousElementSibling.style.display = "block"; // Show the header
        }
    }
    // Create a new 'footer' element
    var footerElement = document.createElement("footer");

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

    // Set the inner HTML of the copyright element
    copyright.innerHTML = "&#169; Brandon Warren " + thisYear;

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

    // Select the #messages section by id
    var messageSection = document.getElementById("messages");

    // Select the <ul> element within the messageSection
    var messageList = messageSection.querySelector("ul");


    // Fetch GitHub repositories
    const GITHUB_USERNAME = 'brandon91warren';
    const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

    // Create variables for projects section and list
    var projectSection = document.getElementById("Projects");
    var projectList = projectSection.querySelector("ul");

    // Fetch GitHub repositories
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const repositories = data;
            console.log(repositories); // Log the parsed data to see the repositories
            return repositories; // Pass the repositories data to the next then block
        })
        .then(repositories => {
            // Loop through repositories to create list items
            repositories.forEach(repo => {
                // Create a new list item element for each repository
                var project = document.createElement("li");

                // Set the inner text of the project item to the repository name
                project.innerText = repo.name;

                // Append the project item to the projectList
                projectList.appendChild(project);
            });
        })
        .catch(error => {
            console.error('Error:', error); // Log and handle errors from the server
        });
    });