/* SIDE MENU */

function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}


/* FILTER FRAME */

function filterFrames(size) {

    const cards = document.querySelectorAll(".frame-card");

    cards.forEach(card => {

        if (size === "all") {

            card.style.display = "block";

        } else {

            if (card.dataset.size === size) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        }

    });

    closeMenu();

    document.getElementById("frames").scrollIntoView({
        behavior: "smooth"
    });
}


/* DONATION POPUP */

function openDonation() {
    document
        .getElementById("donationPopup")
        .classList.add("active");
}

function closeDonation() {
    document
        .getElementById("donationPopup")
        .classList.remove("active");
}


/* AUTO POPUP */

window.addEventListener("load", function() {

    setTimeout(function() {

        openDonation();

    }, 1500);

});
