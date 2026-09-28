const newDiv = document.createElement("div");
//newDiv.className = "yellow";
newDiv.classList.add("blue");
newDiv.classList.add("green");
//newDiv.classList.contains("blue") // boolean true/false;
//newDiv.classList.toggle("red") // 있으면 class 삭제 / 없으면 class 추가

newDiv.innerHTML = "test";
document.body.append(newDiv);

const daysArr = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"];

const newSection = document.createElement("section");
newSection.classList.add("section_1");
Array(2).fill(undefined).forEach((x,i)=>{
    const newInner = document.createElement("div");
    newInner.classList.add(`inner_${i}`);
    newInner.classList.add(`inner`);
    newSection.append(newInner);
    const cnt = i;
    Array(7).fill(undefined).forEach((y,j)=>{
            const newDay = document.createElement("div");
            newDay.classList.add(`newDay_${j}`);
            newDay.classList.add(`newDay`);
            cnt == 0 ? newDay.innerHTML=`${daysArr[j]}` : j == 6 ? newDay.innerHTML=`정기 휴무` : newDay.innerHTML=`11:30 ~ 23:00`;
            if(cnt ==0 ) j==5 ? newDay.style.cssText=`border-left: 3px solid red` : `border-left: 1px solid #666`;
            j==6 ? newDay.style.cssText=`color:rgb(192,192,192)` : ``;
            newInner.append(newDay);
    });
});
document.body.append(newSection);