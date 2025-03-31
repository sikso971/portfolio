document.addEventListener("DOMContentLoaded", () => {
    const petals = document.querySelectorAll(".petal");

    petals.forEach(petal => {
        petal.addEventListener("click", () => {
            // Désactive les interactions immédiatement
            petal.style.pointerEvents = "none";

            // Supprime la classe hover
            petal.classList.remove("hover");

            // Ajoute la classe d'animation
            petal.classList.add("clicked");

            // Récupère l'ID de la mission
            const mission = petal.getAttribute("data-content");

            // Détermine la bonne page pour chaque mission
            let targetPage = "";
            switch (mission) {
                case "sp1":
                    targetPage = "sp1.html";
                    break;
                case "sp2":
                    targetPage = "sp2.html";
                    break;
                case "sp3":
                    targetPage = "sp3.html";
                    break;
                case "entreprise":
                    targetPage = "entreprise_desc.html"; // Page spéciale pour l'entreprise
                    break;
                case "docs":
                    targetPage = "documents.html"; // Page spéciale pour les documents
                    break;
                default:
                    targetPage = "index.html"; // Par défaut, retour à l'accueil
            }

            // Redirection après l'animation
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

            // Désactive le bouton temporairement
            backButton.style.pointerEvents = "none";

            // Animation du bouton de retour
            backButton.classList.add("clicked");

            // Retour à l'accueil après l'animation
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
        });
    }
});
