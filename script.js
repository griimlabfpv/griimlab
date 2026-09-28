/* =========================
   SIDE MENU
========================= */

function openMenu() {

    document
        .getElementById("sideMenu")
        .classList.add("active");

    document
        .getElementById("overlay")
        .classList.add("active");

}


function closeMenu() {

    document
        .getElementById("sideMenu")
        .classList.remove("active");

    document
        .getElementById("overlay")
        .classList.remove("active");

}


/* =========================
   SEARCH
========================= */

function toggleSearch() {

    const searchBox =
        document.getElementById("searchBox");

    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {

        document
            .getElementById("searchInput")
            .focus();

    }

}


function searchFrames() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".frame-card");

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   FILTER
========================= */

function filterFrames(size) {

    const cards =
        document.querySelectorAll(".frame-card");

    const filters =
        document.querySelectorAll(".filter");


    filters.forEach(button => {

        button.classList.remove("active");

    });


    cards.forEach(card => {

        if (size === "all") {

            card.style.display = "";

        } else {

            if (card.dataset.size === size) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        }

    });


    filters.forEach(button => {

        if (
            button.innerText.trim() ===
            getFilterName(size)
        ) {

            button.classList.add("active");

        }

    });


    closeMenu();

}


function getFilterName(size) {

    const names = {

        "all": "all",

        "65mm": "65mm",

        "72mm": "72mm",

        "2in": '2"',

        "2.5in": '2.5"',

        "3in": '3"',

        "3.5in": '3.5"',

        "4in": '4"',

        "5in": '5"'

    };

    return names[size];

}


/* =========================
   SCROLL
========================= */

function goTo(id) {

    closeMenu();

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}
