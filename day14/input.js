const date = document.querySelector("#date");
const pTag = document.createElement("p");
date.addEventListener("input", (x) => {
    console.log(x);
    //const fullDate = x.target.value.split("-");
    const {value} = x.target;
    const [year, month, date] = value.split("-");
    pTag.innerHTML = `${year}년 ${month}월 ${date}일`;
});
document.body.append(pTag);