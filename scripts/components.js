document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");

    // Ajustar las rutas de los enlaces después de cargar el header
    setTimeout(() => {
        const pathPrefix = window.location.pathname.includes("index.html") ? "" : "../";
        
        document.getElementById("link-cv").href = pathPrefix + "cv.html"; // Ruta del CV
        document.getElementById("link-contact").href = pathPrefix + "contact.html"; // Ruta de Contacto
    }, 100);

    // Cambiar la imagen del logo al hacer hover
    const logoImage = document.querySelector(".navbar .logo img");
    const defaultImage = 'images/elena-dominguez-texto.png'; // Imagen por defecto
    const hoverImage = 'images/elena-dominguez-texto-hover.png'; // Imagen cuando el ratón entra

    if (logoImage) {
        logoImage.src = defaultImage; // Aseguramos que la imagen por defecto esté cargada

        logoImage.addEventListener("mouseenter", function() {
            logoImage.src = hoverImage; // Cambiar imagen cuando el ratón entra
        });

        logoImage.addEventListener("mouseleave", function() {
            logoImage.src = defaultImage; // Volver a la imagen por defecto cuando el ratón sale
        });
    }
});

function loadComponent(id, file) {
    fetch(`components/${file}`)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}
