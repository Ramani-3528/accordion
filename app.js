const accordions = document.querySelectorAll(".accordion");

accordions.forEach(button => {
    button.addEventListener("click", () => {
        const panel = button.nextElementSibling;
        const isOpen = panel.style.display === "block";
        document.querySelectorAll(".panel").forEach(p => p.style.display = "none");
        panel.style.display = isOpen ? "none" : "block";
    });
});
