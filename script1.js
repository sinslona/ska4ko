const themeBtn = document.getElementById("themeBtn");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
}

//смена темы
themeBtn.onclick = () => {
    body.classList.toggle("dark-theme");

    // Сохраняем текущую тему
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77)");
    } else {
        localStorage.setItem("theme", "light");
    }
};

