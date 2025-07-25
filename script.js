document.addEventListener("DOMContentLoaded", () => {
    // dark mode toggle 
    const toggle = document.getElementById("themeToggle");
    const elementsToToggle = [
        document.body,
        document.querySelector("nav"),
        document.querySelector("footer"),
        ...document.querySelectorAll("section, div")
    ];

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        elementsToToggle.forEach(el => el?.classList.add("dark"));
        if (toggle) toggle.textContent = "☀️";
    } else if{
        elementsToToggle.forEach(el => el?.classList.remove("dark"));
        if (toggle) toggle.textContent = "🌙";
    }else{
        localStorage.setItem("theme", "light");
        if (toggle) toggle.textContent = "🌙";
}
    }


if (toggle) {
    toggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark");
        document.querySelector("nav")?.classList.toggle("dark");
        document.querySelector("footer")?.classList.toggle("dark");
        document.querySelectorAll("section").forEach(el => el.classList.toggle("dark"));
        document.querySelectorAll("div").forEach(el => el.classList.toggle("dark"));
        toggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}


    //form validation
    const loginBtn = document.getElementById("login-btn"); 
if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const username = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
        const errorMessage = document.querySelector(".error-message");

        if (!username && !password) {
            errorMessage.textContent = "Please enter your email and password!";
            return;
        }
        if (!username) {
            errorMessage.textContent = "Please enter your email!";
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
           errorMessage.textContent = "Please enter a valid email!";
            return;
        }
        if (!password) {
            errorMessage.textContent = "Please enter your password!";
            return;
        }
        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters long!";
            return;
        }
        
        alert("Login successful!");
        });
}
});