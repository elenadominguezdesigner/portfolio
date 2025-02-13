document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");

    // Ajustar las rutas de los enlaces después de cargar el header
    setTimeout(() => {
        const pathPrefix = window.location.pathname.includes("index.html") ? "" : "../";
        
        document.getElementById("link-cv").href = pathPrefix + "cv.html"; // Ruta del CV
        document.getElementById("link-contact").href = pathPrefix + "contact.html"; // Ruta de Contacto
    }, 100);
});

function loadComponent(id, file) {
    fetch(`components/${file}`)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}