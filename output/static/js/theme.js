/**
 * theme.js
 *
 * Handles dark/light theme switching:
 * - Applies saved theme from localStorage (or system default on first visit)
 * - Updates <html data-theme="">
 * - Handles UI label for the theme toggle link
 */

document.addEventListener("DOMContentLoaded", function () {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");

    const applyTheme = (theme) => {
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        if (toggle) {
            toggle.textContent = theme === "dark" ? "/theme/dark" : "/theme/light";
        }
    };

    const current = root.getAttribute("data-theme") || "light";
    applyTheme(current); // sets the label

    if (toggle) {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const isDark = root.getAttribute("data-theme") === "dark";
            applyTheme(isDark ? "light" : "dark");
        });
    }
});


