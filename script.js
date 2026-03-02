/*Modo oscuro/claro*/
const toggleButton = document.getElementById("toggleMode");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleButton.textContent = "🌙";
    } else {
        toggleButton.textContent = "☀️";
    }
});