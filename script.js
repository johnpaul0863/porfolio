
/* ===============================
   DARK MODE
================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    // Restore saved theme
    if (localStorage.getItem("portfolioTheme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        themeToggle.textContent = isDark ? "☀" : "☾";

        localStorage.setItem(
            "portfolioTheme",
            isDark ? "dark" : "light"
        );
    });
}


/* ===============================
  /* ===============================
   FALLING SAKURA PETALS
================================ */

const flowerContainer = document.getElementById("flower-container");

const petals = ["🌸", "🌸", "🌺", "✿", "❀"];

function createSakura() {
    if (!flowerContainer) {
        console.error("Flower container not found!");
        return;
    }

    const petal = document.createElement("span");

    petal.className = "sakura-petal";
    petal.textContent = petals[
        Math.floor(Math.random() * petals.length)
    ];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (15 + Math.random() * 20) + "px";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    flowerContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 11000);
}

setInterval(createSakura, 300);

/* ===============================
   BACKGROUND MUSIC
================================ */

const bgMusic = document.getElementById("bgMusic");
const soundToggle = document.getElementById("soundToggle");

if (bgMusic && soundToggle) {

    soundToggle.textContent = "♪";

    soundToggle.addEventListener("click", async () => {

        if (bgMusic.paused) {
            try {
                await bgMusic.play();

                soundToggle.textContent = "♫";
                soundToggle.classList.add("playing");
                soundToggle.setAttribute(
                    "aria-label",
                    "Pause background music"
                );

            } catch (error) {
                console.log("Music could not be played:", error);
                alert("Hindi ma-play ang music. Check kung tama ang music file name.");
            }

        } else {
            bgMusic.pause();

            soundToggle.textContent = "♪";
            soundToggle.classList.remove("playing");
            soundToggle.setAttribute(
                "aria-label",
                "Play background music"
            );
        }
    });
}


/* ===============================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}
