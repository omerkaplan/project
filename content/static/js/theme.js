/**
 * theme.js
 *
 * Handles scroll-based badge visibility on homepage and article pages
 */

document.addEventListener("DOMContentLoaded", function () {
    // Hide badges on scroll for homepage and article pages
    if (document.body.classList.contains("homepage") || document.body.classList.contains("article-page")) {
        const coffeeBadge = document.querySelector(".homepage-coffee-badge, .article-coffee-badge");
        const homeButton = document.querySelector(".article-home-button");

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            // Show badges only when at the top
            if (currentScroll <= 50) {
                coffeeBadge?.classList.remove("hidden");
                homeButton?.classList.remove("hidden");
            }
            // Hide badges when scrolled down
            else {
                coffeeBadge?.classList.add("hidden");
                homeButton?.classList.add("hidden");
            }
        });
    }
});
