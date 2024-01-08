document.addEventListener('DOMContentLoaded', function() {
    // Login and Signup Form Handling
    document.getElementById('loginBtn').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
    });

    document.getElementById('signupBtn').addEventListener('click', function() {
        document.getElementById('signupForm').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    });

    document.getElementById('closeLoginForm').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'none';
    });

    document.getElementById('backToLogin').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
    });

    // Toggle Navbar Functionality
    var menuIcon = document.querySelector('.menu-icon');
    var navbar = document.querySelector('.navbar');
    var navbarLinks = document.querySelectorAll('.navbar a');

    // Function to toggle navbar on small screens
    function toggleNavbar() {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
        } else {
            navbar.classList.add('open');
        }
    }

    // Attach event listener to menu icon
    menuIcon.addEventListener('click', toggleNavbar);

    // Additional functionality if required
    // For example, close navbar when a link is clicked
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                toggleNavbar();
            }
        });
    });
});
