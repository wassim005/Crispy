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



let spans = document.querySelectorAll(".input-span");
let span1 = document.getElementById("input-span1");
let span2 = document.getElementById("input-span2");
let span3 = document.getElementById("input-span3");
let inputs = document.querySelectorAll(".input");
let input1 = document.getElementById("name-input");
let input2 = document.getElementById("email-input");
let input3 = document.getElementById("date-input");
let box1 = document.getElementById("input-box1");
let box2 = document.getElementById("input-box2");
let box3 = document.getElementById("input-box3");
const submitButton = document.getElementById("submit-button");
const yours = document.getElementById("yours");
let yoursSpan1 = document.getElementById("yours-span1");
let yoursSpan2 = document.getElementById("yours-span2");
let yoursSpan3 = document.getElementById("yours-span3");



submitButton.addEventListener("click", () => {
    let inputName = input1.value;
    let inputEmail = input2.value;
    let dateValue = input3.value;

    let dateParts = dateValue.split("-");
    let year = dateParts[0];
    let month = dateParts[1];
    let day = dateParts[2];

    localStorage.setItem("savedName", inputName);
    localStorage.setItem("savedEmail", inputEmail);
    localStorage.setItem("savedDate", dateValue);

    if (inputName.length > 5 && inputEmail.length > 5 && year > 2024) {
        inputs.forEach(input => {
            input.style.animation = "close-input 0.75s linear forwards";
        });
        submitButton.style.animation = "close-input 0.4s linear forwards";
        yours.style.display = "block";
        setTimeout(() => {
            inputs.forEach(input => {
                input.style.display = "none";
            });
        }, 1100);
        setTimeout(() => {
            spans.forEach(span => {
                span.style.display = "none";
            });
        }, 1100);
        setTimeout(() => {
            submitButton.style.display = "none";
            yours.style.animation = "show 0.2s linear forwards";
            yoursSpan1.innerHTML = inputName;
            yoursSpan2.innerHTML = inputEmail;
            yoursSpan3.innerHTML = `${day}/${month}/${year}`;
        }, 500);
    }
    else if (inputName.length < 5 && inputEmail.length <= 5 && year <= 2024) {
        inputs.forEach(input => {
            input.style.border = "1px solid red";
            input.style.animation = "input 0.5s linear";
            setTimeout(() => {
                input.style.border = "1px solid var(--bg-light-gray)";
                input.style.animation = "none";
            }, 600);
        });
        spans.forEach(span => {
            span.style.display = "inline";
        });
    }
    else if (inputName.length < 5 && year <= 2024) {
        span1.style.display = "inline";
        span3.style.display = "inline";
        box1.style.border = "1px solid red";
        box1.style.animation = "input 0.5s linear";
        box3.style.border = "1px solid red";
        box3.style.animation = "input 0.5s linear";
        setTimeout(() => {
            box1.style.border = "1px solid var(--bg-light-gray)";
            box1.style.animation = "none";
            box3.style.border = "1px solid var(--bg-light-gray)";
            box3.style.animation = "none";
        }, 600);
        span2.style.display = "none";
    }
    else if (inputEmail.length <= 5 && year <= 2024) {
        span2.style.display = "inline";
        span3.style.display = "inline";
        box2.style.border = "1px solid red";
        box2.style.animation = "input 0.5s linear";
        box3.style.border = "1px solid red";
        box3.style.animation = "input 0.5s linear";
        setTimeout(() => {
            box2.style.border = "1px solid var(--bg-light-gray)";
            box2.style.animation = "none";
            box3.style.animation = "none";
            box3.style.border = "1px solid var(--bg-light-gray)";
        }, 600);
        span1.style.display = "none";
    }
    else if (inputName.length < 5) {
        span1.style.display = "inline";
        box1.style.border = "1px solid red";
        setTimeout(() => {
            box1.style.border = "1px solid var(--bg-light-gray)";
        }, 600);
        span2.style.display = "none";
        span3.style.display = "none";
    }
    else if (inputEmail.length <= 5) {
        span2.style.display = "inline";
        box2.style.border = "1px solid red";
        setTimeout(() => {
            box2.style.border = "1px solid var(--bg-light-gray)";
        }, 600);
        span1.style.display = "none";
        span3.style.display = "none";
    }
    else if (year <= 2024) {
        span3.style.display = "inline";
        box3.style.border = "1px solid red";
        setTimeout(() => {
            box3.style.border = "1px solid var(--bg-light-gray)";
        }, 600);
        span1.style.display = "none";
        span2.style.display = "none";
    }
});

window.addEventListener("load", () => {
    if (localStorage.getItem("savedName")) {
        input1.value = localStorage.getItem("savedName");
    }
    if (localStorage.getItem("savedEmail")) {
        input2.value = localStorage.getItem("savedEmail");
    }
    if (localStorage.getItem("savedDate")) {
        input3.value = localStorage.getItem("savedDate");
    }
});

const forwardIcons = document.querySelectorAll(".forward-icon");

forwardIcons.forEach(forwardIcon => {
    forwardIcon.onclick = () => {
        
    }
})