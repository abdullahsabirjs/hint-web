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
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var navbarLinks = document.querySelectorAll('.navbar a'); // Select all links inside the navbar

    menuIcon.addEventListener('click', function() {
        // Toggle display of each link
        navbarLinks.forEach(function(link) {
            if (link.style.display === 'block') {
                link.style.display = 'none';
            } else {
                link.style.display = 'block';
            }
        });
    });
});

