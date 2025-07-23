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

    if (toggle) {
        toggle.addEventListener("click", () => {
            const isDark = !body.classList.contains("dark");
            body.classList.toggle("dark");
            nav?.classList.toggle("dark");
            footer?.classList.toggle("dark");
            gallerySection?.classList.toggle("dark");
            about?.classList.toggle("dark");
            
            sections.forEach(section => section.classList.toggle("dark"));
            divs.forEach(div => div.classList.toggle("dark"));

            toggle.textContent = isDark ? "☀️" : "🌙";
        });
    }

    //form validation
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            const username = document.querySelector('input[type="email"]')?.value;
            const password = document.querySelector('input[type="password"]')?.value;
            
             if (!username && !password) {
                alert("Username and Password required!");
                return;
            }
            }
            else if (!username.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(username)) {
                alert("Invalid Username!");
                return;
            }
            else if (!password) {
                alert("Password is required!");
                return;
            }
                        
           
            
            
            if (password.length < 6) {
                alert("Password must be at least 6 characters!");
                return;
            }
            alert("Login successful!");
        });
    }
});