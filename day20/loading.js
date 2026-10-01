/**
 * 로딩이 2초뒤에 사라지고 이미지 나옴
 */

const btn = document.querySelector("#btn");
const center = document.querySelector(".center");
const img = document.querySelector("img");
const loading = new Promise((success,fail) => {
    setTimeout(() => {
        success(center.style.cssText='display:block');
    }, 2000);
});

btn.addEventListener("click", ()=>{
    loading.then((x)=>x);
    //center.style.cssText='display:block';
    //img.style.cssText='display:block';
});