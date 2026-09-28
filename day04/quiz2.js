/**
 * email 검사
 * 1. @가 포함해야 합니다 -> @를 포함해야합니다.
 * 2. .net .com .co.kr로 끝나야 합니다 -> .net/.com/.co.kr로 끝나야합니다.
 * 3. 이메일이 모두 소문자여야함 -> 이메일은 소문자여야합니다.
 * 4. 숫자 0~9 사이 하나 포함해야함 -> 숫자를 반드시 포함해야합니다.
 * 이메일 통과
 */
// const emailData = window.prompt('email');
const targets = [".net", ".com", ".co.kr"];

const emailChk = (data)=>{
    const chkData = data;
    chkData = !chkData.includes("@") ? 
        "@포함" : !targets.every(word => chkData.includes(targets)) ?
            ".net/.com/.co.kr로 끝나야 합니다." : !chkData.toLowerCase() ?
                "이메일은 소문자여야합니다." : "";
}