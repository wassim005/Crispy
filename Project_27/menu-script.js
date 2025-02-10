const header = document.getElementById("header");
const scrollBtn = document.getElementById("scroll-btn");

addEventListener("scroll", () => {
    if (slide.style.display === "flex") {
        slide.style.animation = "close-slide 0.3s linear forwards";
        setTimeout(() => {
        slide.style.display = "none";
        }, 300);
    }
    if (scrollY > 100) {
        header.style.animation = "open-header 0.5s linear forwards";
        scrollBtn.style.display = "block";
    }
    else {
        header.style.animation = "close-header 0.5s linear forwards";
        scrollBtn.style.display = "none";
    }
})
scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
    });
}

const menuIcon = document.getElementById("menu-icon");
const slide = document.getElementById("slide");
const closeSlide = document.getElementById("close-slide");

menuIcon.addEventListener("click", () => {
    if (slide.style.display === "flex") {
        slide.style.animation = "close-slide 0.3s linear forwards";
        setTimeout(() => {
        slide.style.display = "none";
        }, 300);
    }
    else {
        slide.style.display = "flex";
        slide.style.animation = "open-slide 0.3s linear forwards";
    }
    closeSlide.addEventListener("click", () => {
        slide.style.animation = "close-slide 0.3s linear forwards";
        setTimeout(() => {
            slide.style.display = "none";
        }, 300);
    });
})

const modeIcon = document.getElementById("mode-icon");
const root = document.documentElement;
const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
    applyDarkMode();
    modeIcon.innerHTML = "dark_mode";
} else {
    applyLightMode();
    modeIcon.innerHTML = "light_mode";
}

modeIcon.addEventListener("click", () => {
    modeIcon.style.animation = "icon 0.75s linear forwards";
    
    if (modeIcon.innerHTML === "light_mode") {
        setTimeout(() => {
            modeIcon.innerHTML = "dark_mode";
            applyDarkMode();
            localStorage.setItem('theme', 'dark');
            modeIcon.style.animation = "none";
        }, 350);
    } else {
        setTimeout(() => {
            modeIcon.innerHTML = "light_mode";
            applyLightMode();
            localStorage.setItem('theme', 'light');
            modeIcon.style.animation = "none";
        }, 350);
    }
});

function applyDarkMode() {
    root.style.setProperty("--bg-sinopia", "#ff6b3a");
    root.style.setProperty("--bg-sinopia-alpha-7", "#fe896121");
    root.style.setProperty("--bg-rich-black-fogra-29", "#0e1216");
    root.style.setProperty("--bg-rich-black-rogra-29-alpha-50", "#0e121680");
    root.style.setProperty("--bg-white", "#1a1a1a");
    root.style.setProperty("--bg-isabelline", "#2c2a27");
    root.style.setProperty("--bg-seashell", "#2b1f1c");
    root.style.setProperty("--bg-light-gray", "#555555");
    root.style.setProperty("--bg-black", "#ffffff");
    root.style.setProperty("--text-white", "#e6e6e6");
    root.style.setProperty("--text-black", "#ffffff");
    root.style.setProperty("--text-rich-black-fogra-29", "#d1d4d8");
    root.style.setProperty("--text-granite-gray", "#aaaaaa");
    root.style.setProperty("--border-white-alpha-50", "#ffffff33");
    root.style.setProperty("--border-cultured", "#3a3a3a");
    root.style.setProperty("--border-platinum", "#4d4b48");
}

function applyLightMode() {
    root.style.setProperty("--bg-sinopia", "#e04000");
    root.style.setProperty("--bg-sinopia-alpha-7", "#e0400012");
    root.style.setProperty("--bg-rich-black-fogra-29", "#0e1216");
    root.style.setProperty("--bg-rich-black-rogra-29-alpha-50", "#0e121680");
    root.style.setProperty("--bg-white", "#ffffff");
    root.style.setProperty("--bg-isabelline", "#fbf7f4");
    root.style.setProperty("--bg-seashell", "#fdf1ed");
    root.style.setProperty("--bg-light-gray", "#cccccc");
    root.style.setProperty("--bg-black", "#000000");
    root.style.setProperty("--text-white", "#ffffff");
    root.style.setProperty("--text-black", "#000000");
    root.style.setProperty("--text-rich-black-fogra-29", "#0e1216");
    root.style.setProperty("--text-granite-gray", "#666666");
    root.style.setProperty("--border-white-alpha-50", "#ffffff80");
    root.style.setProperty("--border-cultured", "#ededed");
    root.style.setProperty("--border-platinum", "#e1dedb");
}
