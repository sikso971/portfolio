document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const missionKey = params.get("mission");

    const missions = {
        "sp1": { title: "Mission SP 1", description: "Description complète de la mission SP 1..." },
        "sp2": { title: "Mission SP 2", description: "Détails de la mission SP 2..." },
        "sp3": { title: "Mission SP 3", description: "Détails de la mission SP 3..." },
        "entreprise": { title: "Présentation de l'Entreprise", description: "Infos sur l'entreprise..." },
        "docs": { title: "Documents E4", description: "Liste des documents demandés pour l'épreuve E4." }
    };

    const missionTitle = document.getElementById("mission-title");
    const missionDescription = document.getElementById("mission-description");

    if (missions[missionKey]) {
        missionTitle.textContent = missions[missionKey].title;
        missionDescription.textContent = missions[missionKey].description;
    } else {
        missionTitle.textContent = "Mission introuvable";
        missionDescription.textContent = "Cette mission n'existe pas.";
    }
});
