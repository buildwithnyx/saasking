// Prepared file structure for handling animations later
document.addEventListener("DOMContentLoaded", () => {
    console.log("Saasking theme skeleton initialized successfully!");

    // Basic placeholder event to inspect interaction
    const cards = document.querySelectorAll('.mockup-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Feel free to update things dynamically when the user points
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // --- Demo Categories Tab Filter logic ---
    const filterTabs = document.querySelectorAll(".filter-tab");
    const demoCards = document.querySelectorAll(".demo-card");

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class style state from current tab
            document.querySelector(".filter-tab.active").classList.remove("active");
            tab.classList.add("active");

            const selectedFilter = tab.getAttribute("data-filter");

            demoCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (selectedFilter === "all" || cardCategory === selectedFilter) {
                    card.style.display = "block";
                    setTimeout(() => card.style.opacity = "1", 10);
                } else {
                    card.style.opacity = "0";
                    card.style.display = "none";
                }
            });
        });
    });

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.custom-cursor');

    // Check if the device supports hovering (to prevent JS running unnecessarily on mobile)
    if (window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Use requestAnimationFrame for optimal performance
            requestAnimationFrame(() => {
                if (cursor) {
                    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
                }
            });
        });
    }
});