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
    } else {
        elementsToToggle.forEach(el => el?.classList.remove("dark"));
        if (toggle) toggle.textContent = "🌙";
    }

// ...existing code...
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
// ...existing code...

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
            alert("Password must be at least of 6 characters !");
            return;
        }
        
        alert("Login successful!");
        });
}
});