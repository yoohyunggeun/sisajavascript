const infoBtn = document.querySelector("#info");
const reviewBtn = document.querySelector("#review");
const qaBtn = document.querySelector("#qa");
const btn = document.querySelectorAll("button");
reviewBtn.classList.add("selectBtn");

btn.forEach((x)=>{
    x.addEventListener("click", (event) => {
        btn.forEach((button) => {
            button.classList.remove("selectBtn");
            button.classList.add("unselectBtn");
        });

        event.target.classList.remove("unselectBtn");
        event.target.classList.add("selectBtn");
    });
});