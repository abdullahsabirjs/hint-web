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


// Function to perform a search
function searchFunction() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var results = document.getElementsByClassName("searchResult");

    for (var i = 0; i < results.length; i++) {
        if (results[i].innerText.toUpperCase().indexOf(filter) > -1) {
            results[i].style.display = "";
        } else {
            results[i].style.display = "none";
        }
    }
}

// Function to show a specific section and handle the blurred background
function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    var content = document.querySelector('.content');

    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        if (sectionId === 'login' || sectionId === 'signup') {
            content.classList.add('blurred-background');
        } else {
            content.classList.remove('blurred-background');
        }
    }
    closeNav();
}

// Event listener for the login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login form submitted!");
    // Add login logic here
});

// Event listener for the signup form
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup form submitted!");
    // Add signup logic here
});

// Initially display the home section when the page loads
window.onload = function() {
    showSection('home');
};
function openNav() {
    document.getElementById("navbar").style.width = "250px";
}

function closeNav() {
    document.getElementById("navbar").style.width = "0";
}

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
    closeNav();
}
