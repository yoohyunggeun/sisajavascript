const randomInt = (max,min) =>{
    return Math.floor(Math.random() * (max-min+1))+min;
}
const randomColor = ()=>{
    return `#${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}${colorArr[randomInt(15,0)]}`;
};
/**
 * #000000 ~ #ffffff
 * 임의의 색상이 나오도록 해주는 함수 만들기
 */
const user = +prompt('??');
const colorArr = [..."0123456789abcdef"];
const container = document.createElement("div");
container.style.cssText = `width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns:repeat(5,1fr);`;
Array(user).fill(undefined).forEach((x,i)=>{
        const box = document.createElement("div");
        box.style.cssText = `
        width: 100%;
        height: 100%;
        background-color:${randomColor()};
        `;
        container.append(box);
})

document.body.append(container);
