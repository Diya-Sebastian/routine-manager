const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.id === "darkToggle") {
            document.body.classList.toggle("dark-mode");
            return;
        }

        navButtons.forEach(btn => btn.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));

        button.classList.add("active");

        const pageId = button.getAttribute("data-page");
        document.getElementById(pageId).classList.add("active");
    });
});
