const total = document.querySelector(".total");
total.innerHTML = +0;

const clickEvt1 = document.querySelector(".increse");
clickEvt1.addEventListener("click", () => {
    total.innerHTML = +total.innerHTML + 1;
});
const clickEvt2 = document.querySelector(".decrese");
clickEvt2.addEventListener("click", () => {
    total.innerHTML = +total.innerHTML - 1;
});


const clickBtn = document.querySelector(".btn");
const cont = document.querySelector(".container");
const sec_2 = document.querySelectorAll(".section_2>.btn2");
clickBtn.addEventListener("click", () => {
    clickBtn.innerHTML = clickBtn.innerHTML == "🌙어둡게" ? "☀️밝게" : "🌙어둡게";
    clickBtn.classList.toggle("light");
    cont.classList.toggle("light");
    sec_2.forEach((x)=> x.classList.toggle("light"));
});

