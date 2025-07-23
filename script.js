document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle 
    const toggle = document.getElementById("themeToggle");
    const body = document.body;
    const nav = document.querySelector("nav");
    const sections = document.querySelectorAll("section");
    const divs = document.querySelectorAll("div");
    const footer = document.querySelector("footer");
    const gallerySection = document.querySelector(".gallery-section");
    const about = document.querySelector(".about");

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        nav.classList.toggle("dark");
        footer.classList.toggle("dark");
        gallerySection.classList.toggle("dark");
        about.classList.toggle("dark");
        
        sections.forEach(section => section.classList.toggle("dark"));
        divs.forEach(div => div.classList.toggle("dark"));

        if (toggle.textContent === "🌙") {
            toggle.textContent = "☀️"; 
        } else {
            toggle.textContent = "🌙"; 
        }
    });

    //form validation
    const loginBtn = document.getElementById("login-btn"); 
if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const username = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (!username && !password) {
            alert("Both username and password are required!");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
            alert("Please enter a valid email address!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }
        
        alert("Login successful! Redirecting...");
        });
}
});