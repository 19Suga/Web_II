document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Verifica el tema guardado en localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleButton.textContent = "🌙"; // Luna para volver a oscuro
    }

    // Evento para cambiar el modo
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙"; // Luna para volver a oscuro
        } else {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️"; // Sol para volver a claro
        }
    });

    // Manejo del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Obtener valores
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validación simple
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "⚠️ Todos los campos son obligatorios.";
            formMessage.style.color = "red";
            return;
        }

        // Mostrar mensaje de éxito
        formMessage.textContent = "✅ ¡Mensaje enviado correctamente!";
        formMessage.style.color = "green";

        // Mostrar alerta con los datos ingresados
        alert(`📩 Mensaje enviado:\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`);

        // Limpiar formulario después de 3 segundos
        setTimeout(() => {
            form.reset();
            formMessage.textContent = "";
        }, 3000);
    });

    // Efecto hover en los enlaces del header
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#00D4FF"; // Cambio de color al pasar el mouse
            this.style.transition = "color 0.3s ease";
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "#ffffff"; // Vuelve al color original
        });
    });
});
