/**
 * 타입
 * 기본 : string, boolean, number, undefined
 * 참조 : array, object, function + window(브라우저), document(HTML), element(Tag)
 */
// window.confirm("hi");
// window.alert("bye");

const btn = document.createElement("button");
btn.innerHTML = "오늘은 수요일";
btn.style.backgroundColor = "pink";
document.body.append(btn);

/**
 * div 태그로 만들고 - 오늘 날짜 넣기
 * h1 태그로 만들고 - js & html 넣기
 * 화면에 태그 나타나도록 하기
 */
const view = {
    viewer(x, content){
        x = document.createElement(x);
        x.innerHTML = content;
        document.body.append(x);
    },
    arr(userData,num){
        const changeData = userData.split(",");
        return changeData[num];
    }
}
view.viewer("div", "2026-09-09");
view.viewer("h1", "js & html");

/**
 * 유저한테 만들고 싶은 태그 묻고, 내용묻고 화면에 나타내기
 */
const user = window.prompt(`tag & content`);
view.viewer(view.arr(user,0),view.arr(user,1));