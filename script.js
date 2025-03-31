document.addEventListener("DOMContentLoaded", () => {
    const petals = document.querySelectorAll(".petal");

    petals.forEach(petal => {
        petal.addEventListener("click", () => {
            // Désactive le hover et les interactions
            petal.style.pointerEvents = "none";
            petal.classList.add("clicked");

            // Récupère l'ID de la mission
            const mission = petal.getAttribute("data-content");

            // Détermine la bonne page
            let targetPage = "";
            switch (mission) {
                case "entreprise": targetPage = "entreprise.html"; break;
                case "formations": targetPage = "formations.html"; break;
                case "veille":targetPage ="veille.html";break;
                case "profil": targetPage= "profil.html"; break;
                default: targetPage = "index.html";
            }

            // Redirection après l’animation
            setTimeout(() => {
                window.location.href = targetPage;
            }, 500);
        });
    });

    // Gestion du bouton retour
    const backButton = document.querySelector(".back-button");
    if (backButton) {
        backButton.addEventListener("click", (event) => {
            event.preventDefault();
            backButton.style.pointerEvents = "none";
            backButton.classList.add("clicked");

            // Retour à l’accueil
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
        });
    }
});
