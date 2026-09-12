/* =====================================================
JAVASCRIPT PORTOFOLIO NURFAUZIAH UMAR
Efek interaktif tanpa mengubah CSS sebelumnya
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
    1. EFEK MUNCUL SAAT HALAMAN DIBUKA
       ================================================= */

    const elements = document.querySelectorAll(
        ".home-content, .photo-frame, .about-box, .skill-card, .education-card, .contact-box, .section-heading"
    );

    elements.forEach(function (element, index) {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(function () {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 150 + (index * 100));

    });


    /* =================================================
    2. EFEK PADA FOTO
       ================================================= */

    const photo = document.querySelector(".photo-frame img");

    if (photo) {

        photo.addEventListener("click", function () {

            photo.style.transform = "scale(1.08)";

            setTimeout(function () {
                photo.style.transform = "scale(1)";
            }, 400);

            showMessage("💜 Terima kasih sudah melihat portfolio saya!");

        });

    }


    /* =================================================
    3. EFEK KARTU SKILL
       ================================================= */

    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const skillName =
                card.querySelector("h2");

            if (skillName) {

                showMessage(
                    "✨ Kamu memilih skill: " +
                    skillName.textContent
                );

            }

        });

    });


/* =================================================
4. EFEK KARTU PENDIDIKAN
   ================================================= */

const educationCards = document.querySelectorAll(".education-card");

educationCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const school = card.querySelector("h2").textContent.trim();
        const year = card.querySelector(".education-year").textContent.trim();

        showMessage(
            "🎓 Pendidikan: " + school +
            "\n,   📅 Tahun: " + year
        );

    });

});

    /* =================================================
    5. EFEK KONTAK
       ================================================= */

    const contactItems =
        document.querySelectorAll(".contact-item");

    contactItems.forEach(function (item) {

        item.addEventListener("click", function (event) {

            /* Jangan mengganggu link GitHub/Instagram */
            if (event.target.closest("a")) {
                return;
            }

            const contactName =
                item.querySelector("span");

            if (contactName) {

                showMessage(
                    "💌 Kontak: " +
                    contactName.textContent
                );

            }

        });

    });


    /* =================================================
    6. EFEK BUTTON
       ================================================= */

    const buttons =
        document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.95)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);

        });

    });


    /* =================================================
    7. EFEK LOGO
       ================================================= */

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.style.transition =
            "transform 0.3s ease";

        logo.addEventListener("mouseenter", function () {

            logo.style.transform =
                "rotate(8deg) scale(1.08)";

        });

        logo.addEventListener("mouseleave", function () {

            logo.style.transform =
                "rotate(0deg) scale(1)";

        });

    }


    /* =================================================
    8. TOMBOL KEMBALI KE ATAS
       ================================================= */

    const topButton =
        document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.title = "Kembali ke atas";

    topButton.style.position = "fixed";
    topButton.style.right = "25px";
    topButton.style.bottom = "25px";

    topButton.style.width = "45px";
    topButton.style.height = "45px";

    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";

    topButton.style.background =
        "linear-gradient(135deg, #6c3fc9, #9a6be8)";

    topButton.style.color = "white";

    topButton.style.fontSize = "22px";

    topButton.style.cursor = "pointer";

    topButton.style.boxShadow =
        "0 6px 18px rgba(108,63,201,0.30)";

    topButton.style.display = "none";

    topButton.style.zIndex = "999";

    topButton.style.transition =
        "transform 0.3s ease, opacity 0.3s ease";

    document.body.appendChild(topButton);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 250) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });


    topButton.addEventListener("mouseenter", function () {

        topButton.style.transform =
            "scale(1.12)";

    });


    topButton.addEventListener("mouseleave", function () {

        topButton.style.transform =
            "scale(1)";

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =================================================
    9. PESAN SELAMAT DATANG
       ================================================= */

    setTimeout(function () {

        showMessage(
            "💜 Selamat datang di Portfolio Nurfauziah Umar!"
        );

    }, 700);

});


/* =====================================================
10. FUNGSI PESAN POP-UP
   ===================================================== */

function showMessage(message) {

    const oldMessage =
        document.querySelector(".js-message");

    if (oldMessage) {
        oldMessage.remove();
    }


    const messageBox =
        document.createElement("div");

    messageBox.className = "js-message";

    messageBox.textContent = message;


    messageBox.style.position = "fixed";

    messageBox.style.top = "85px";

    messageBox.style.right = "20px";

    messageBox.style.maxWidth = "320px";

    messageBox.style.padding = "13px 18px";

    messageBox.style.background =
        "linear-gradient(135deg, #6c3fc9, #9a6be8)";

    messageBox.style.color = "white";

    messageBox.style.borderRadius = "12px";

    messageBox.style.boxShadow =
        "0 8px 25px rgba(108,63,201,0.30)";

    messageBox.style.fontSize = "14px";

    messageBox.style.zIndex = "9999";

    messageBox.style.opacity = "0";

    messageBox.style.transform =
        "translateY(-15px)";

    messageBox.style.transition =
        "all 0.4s ease";


    document.body.appendChild(messageBox);


    setTimeout(function () {

        messageBox.style.opacity = "1";

        messageBox.style.transform =
            "translateY(0)";

    }, 50);


    setTimeout(function () {

        messageBox.style.opacity = "0";

        messageBox.style.transform =
            "translateY(-15px)";

        setTimeout(function () {

            messageBox.remove();

        }, 400);

    }, 2500);

}