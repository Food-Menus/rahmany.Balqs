document.addEventListener('DOMContentLoaded', () => {
    // Function to add Navbar and Footer to all pages
    function injectLayout() {
        const body = document.body;

        // Navbar
        const navbar = document.createElement('nav');
        navbar.classList.add('navbar');
        navbar.innerHTML = `
            <a href="profile.html" class="brand">الرحماني</a>
            `;
        body.prepend(navbar);

        // Footer
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.innerHTML = `
            <p>&copy; 2025 Techno Scince. All rights reserved.</p>
        `;
        body.appendChild(footer);
    }

    injectLayout();
});