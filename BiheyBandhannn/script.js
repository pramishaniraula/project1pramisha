// theme toogle
document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("themeToggle");
    const body = document.body;
    const nav = document.querySelector("nav");
    const section = document.querySelector("section");
    const div = document.querySelectorAll("div");
    const footer = document.querySelector("footer");
    const gallerySection = document.querySelector(".gallery-section");
    const about = document.querySelector(".about");

    toggle.addEventListener("click", () => {
         body.classList.toggle("dark");
        nav.classList.toggle("dark");
        footer.classList.toggle("dark");
        gallerySection.classList.toggle("dark");
        aboutSection.classList.toggle("dark");
        
        section.forEach(section => section.classList.toggle("dark"));
        div.forEach(div => div.classList.toggle("dark"));

        if (toggle.textContent === "🌙") {
            toggle.textContent = "☀️"; 
        } else {
            toggle.textContent = "🌙"; 
        }
    });
});


