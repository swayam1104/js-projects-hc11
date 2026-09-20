const keyName = document.getElementById("keyName");
const keyCode = document.getElementById("keyCode");
const code = document.getElementById("code");


const keys = document.querySelectorAll(".keyboard button");


window.addEventListener("keydown",(e) => {
    keyName.textContent = e.key == " " ? "Space" : e.key;
    keyCode.textContent = e.keyCode;
    code.textContent = e.code;


    const digitalKey = document.querySelector(
        `[data-key="$(e.code)]`
    );

    if(digitalKey) {
        digitalKey.classList.add("active");
    }
});

window.addEventListener("keyup", (e) => {
    const digitalKey = document.querySelector(
        `[data-key="$(e.code)"]`
    );

    if(digitalKey) {
        digitalKey.classList.remove("active");
    }
})