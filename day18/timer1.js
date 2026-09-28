// 헬로우 버튼을 누르면 3초 뒤에 alert으로 하이! 라는 기능 만들기
const helloBtn = document.querySelector(".hello");
helloBtn.addEventListener("click", ()=>{
    setTimeout(()=>{
        alert("하이!");
    }, 3000);
});

// 5초 뒤에 콘솔로 현재 시간 나타내는 기능 만들기
const date = new Date();
const curTimer = document.querySelector(".curTimer");
curTimer.addEventListener("click", ()=>{
    setTimeout(()=>{
        console.log(`${date.getHours()} : ${date.getMinutes()}`);
    }, 5000);
});