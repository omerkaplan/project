(function () {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    // Set theme based on saved preference or system
    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDark ? "dark" : "light";
        root.setAttribute("data-theme", defaultTheme);
        localStorage.setItem("theme", defaultTheme);
    }

    // Theme toggle handler
    if (toggle) {
        toggle.addEventListener("click", () => {
            const isDark = root.getAttribute("data-theme") === "dark";
            const newTheme = isDark ? "light" : "dark";
            root.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }
})();
