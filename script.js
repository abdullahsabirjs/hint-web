function openNav() {
    document.getElementById("navbar").style.width = "250px";
}

// Function to close the navigation menu
function closeNav() {
    document.getElementById("navbar").style.width = "0";
}

// Function to toggle the navigation menu
function toggleNav() {
    var nav = document.getElementById("navbar");
    if (nav.style.width === "250px") {
        nav.style.width = "0";
    } else {
        nav.style.width = "250px";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Function to show a specific section and hide others
    function showSection(sectionId) {
        // Hide all sections
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the specified section
        var selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Function to open the navigation menu
    function openNav() {
        document.getElementById("navbar").style.width = "250px";
    }

    // Function to close the navigation menu
    function closeNav() {
        document.getElementById("navbar").style.width = "0";
    }

    // Function to toggle the navigation menu
    function toggleNav() {
        var nav = document.getElementById("navbar");
        if (nav.style.width === "250px") {
            nav.style.width = "0";
        } else {
            nav.style.width = "250px";
        }
    }

    // Get the login form and initially hide it
    var loginForm = document.querySelector('.login');
    loginForm.style.display = 'none';

    // Get all option buttons and add event listeners
    var optionButtons = document.querySelectorAll('.navbar a');
    optionButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var sectionId = button.getAttribute('onclick').match(/\('([^']+)'\)/)[1];
            showSection(sectionId);

            // Close the navigation menu
            closeNav();

            // Hide the signin form
            loginForm.style.display = 'none';
        });
    });

    // Get the signin button and add an event listener
    var signinButton = document.querySelector('.navbar a[onclick*="showSection(\'login\')"]');
    signinButton.addEventListener('click', function(event) {
        event.preventDefault();
        showSection('login');

        // Show the signin form
        loginForm.style.display = 'block';
    });

    // Get the close button inside the signin form and add an event listener
    var closeSigninButton = document.querySelector('.login a[onclick*="closeNav()"]');
    closeSigninButton.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
    });

    // Get the toggle button for the navigation menu
    var toggleButton = document.querySelector('.navbar span');
    toggleButton.addEventListener('click', function() {
        toggleNav();
    });
});
/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})
// Function to post a question from the profile section
function postProfileQuestion() {
    // Get the question input field value
    var question = document.getElementById("profile-question-input").value;

    // Check if the question is not empty
    if (question.trim() !== "") {
        // Create a new question element
        var questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = '<p>' + question + '</p>';

        // Append the question to the Q/A section
        var qaSection = document.getElementById("qa-section");
        qaSection.appendChild(questionElement);

        // Clear the question input field
        document.getElementById("profile-question-input").value = "";
    }
}
// Function to post a question from the profile section
function postProfileQuestion() {
    // Get the question input field value
    var question = document.getElementById("profile-question-input").value;

    // Get the username (you can replace this with the actual username)
    var username = "JohnDoe"; // Replace with the user's actual username

    // Check if the question is not empty
    if (question.trim() !== "") {
        // Create a new question element with username
        var questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = '<p><strong>' + username + ':</strong> ' + question + '</p>';

        // Create a place for answering questions
        var answerElement = document.createElement("div");
        answerElement.className = "answer";
        answerElement.innerHTML = '<input type="text" id="answer-input" placeholder="Your Answer" required>' +
                                  '<button onclick="postAnswer(this)">Post Answer</button>';

        // Append the question and answer elements to the Q/A section
        var qaSection = document.getElementById("qa-section");
        qaSection.appendChild(questionElement);
        qaSection.appendChild(answerElement);

        // Clear the question input field
        document.getElementById("profile-question-input").value = "";
    }
}

// Function to post an answer to a question
function postAnswer(button) {
    // Get the answer input field value
    var answer = button.previousElementSibling.value;

    // Get the username (you can replace this with the actual username)
    var username = "JohnDoe"; // Replace with the user's actual username

    // Check if the answer is not empty
    if (answer.trim() !== "") {
        // Create a new answer element with username
        var answerElement = document.createElement("div");
        answerElement.className = "answer";
        answerElement.innerHTML = '<p><strong>' + username + ':</strong> ' + answer + '</p>';

        // Append the answer element after the question
        button.parentNode.parentNode.insertBefore(answerElement, button.parentNode);

        // Clear the answer input field
        button.previousElementSibling.value = "";
    }
}
