window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// JavaScript to handle hover effect on menu items
const menuItems = document.querySelectorAll('#navbar a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#ff5733'; // Change color on hover
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.color = '#fff'; // Restore original color on mouse leave
    });
});