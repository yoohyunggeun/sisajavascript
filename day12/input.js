const box = document.querySelector("#cont");
box.addEventListener("input", (e)=>{
  const pNum = document.querySelector(".num");
  pNum.innerHTML = `${e.target.value.length} / 100`;
});

const pwd = document.querySelector("#pwd");
const btn = document.querySelector(".overflow");
btn.addEventListener("click", ()=>{
    pwd.type = pwd.type == "password" ? "text" : "password";
});
/*btn.addEventListener("click", () => {
    pwd.getAttribute("type") == "password" ? pwd.setAttribute("type","text") : pwd.setAttribute("type","password");
});*/

