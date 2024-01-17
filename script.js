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