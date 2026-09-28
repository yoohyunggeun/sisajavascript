const btn = document.querySelector(".dropdown");

btn.addEventListener("click", () => {
  const list = document.querySelector(".list");
  list.classList.toggle("noShow");
  list.classList.toggle("show");

  const chevron = document.querySelector("#dropdown_chevron");
  chevron.classList.toggle("down");
});

const test = document.querySelector(".test");
test.addEventListener("click", (event) => {
    console.log("클릭");
    console.log(event);
})