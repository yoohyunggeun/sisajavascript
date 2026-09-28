// 헬로우 버튼을 누르면 3초 뒤에 alert으로 하이! 라는 기능 만들기
const timer = document.createElement("div");
setInterval(()=> {
    const date = new Date();
    timer.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.body.append(timer);
}, 1000);


