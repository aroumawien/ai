/* =====================================================
   ARTIFICIAL INTELLIGENCE - GROUP 6
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const navbar =
    document.getElementById("navbar");


menuButton.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* Close menu after clicking a link */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


/* ================= DARK MODE ================= */

const themeButton =
    document.getElementById("themeButton");


/* Load saved theme */

const savedTheme =
    localStorage.getItem("ai-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


/* Change theme */

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        localStorage.setItem(
            "ai-theme",
            "dark"
        );

        themeButton.textContent = "☀️";

    } else {

        localStorage.setItem(
            "ai-theme",
            "light"
        );

        themeButton.textContent = "🌙";

    }

});


/* ================= SEARCH ================= */

const searchInput =
    document.getElementById("searchInput");

const assignmentSections =
    document.querySelectorAll(
        ".assignment-section"
    );


searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        assignmentSections.forEach(
            function (section) {

                const sectionText =
                    section.textContent
                        .toLowerCase();


                if (
                    sectionText.includes(
                        searchText
                    )
                ) {

                    section.style.display =
                        "block";

                } else {

                    section.style.display =
                        "none";

                }

            }
        );

    }
);


/* ================= SCROLL TO TOP ================= */

const topButton =
    document.getElementById("topButton");


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ================= SHOW/HIDE TOP BUTTON ================= */

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topButton.style.opacity = "1";

        } else {

            topButton.style.opacity = "0.6";

        }

    }
);


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 120;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active-link"
                );


                const target =
                    link.getAttribute(
                        "href"
                    );


                if (
                    target ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }
);


/* ================= SIMPLE REVEAL EFFECT ================= */

const cards =
    document.querySelectorAll(
        ".info-card, .trend-card, .application, .member-card, .future-item"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


cards.forEach(
    function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(15px)";

        card.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        revealObserver.observe(card);

    }
);