/**
 * 유저에게 아이디 만들기
 * 
 * 1. 아이디 길이가 4 ~ 12글자 사이가 아니면 -> 길이를 4 ~ 12글자로 해주세요!
 * 2. 아이디에서 @,!,#이 없으면 -> 특수문자 @!# 중에 하나 포함해야해요!
 * 3. 아이디에서 0번째에서 3번째 글자가 대문자가 아니면 -> 0~3번째 글자는 대문자여야해요!
 * 4. 위에 다 통과되면 아이디 완성
 */
const idData = window.prompt('id??');
const lengthChk = (data) => {
    const a = data.length>12 || data.length<4 ? true:false;
    const id = data;
    const dataArr = {a:a,id:id};
    return dataArr;
};
const chk = (data) => {
    const b = data.includes("@","!","#") ? false:true;
    return b;
};

const newUser = (data) => {
    const test = 
        lengthChk(data).a ? 
            console.log("id 4~12 사이로 만들기") : chk(lengthChk(data).id) ?
                console.log("@!# 중에 하나 포함") : console.log(`아이디 (${data}) 완성`);
                
};
  

newUser(idData);