document.addEventListener("DOMContentLoaded", function () {
    const topics = document.querySelectorAll(".topic");
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    // Sidebar Toggle for Mobile
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });

    // Close Sidebar When Clicking a Topic (Mobile View)
    topics.forEach(topic => {
        topic.addEventListener("click", function () {
            topics.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            const targetSection = document.getElementById(this.dataset.target);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Close sidebar after clicking (for mobile users)
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove("open");
                }
            }
        });
    });

    // Show/Hide Scroll-to-Top Button
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }

        // Highlight active topic based on scroll position
        let scrollPosition = window.scrollY + 100;
        topics.forEach(topic => {
            const targetSection = document.getElementById(topic.dataset.target);
            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionHeight = targetSection.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    topics.forEach(t => t.classList.remove("active"));
                    topic.classList.add("active");
                }
            }
        });
    });

    // Scroll to Top Button Click
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
