/* 비동기 컨트롤 문법 */
/* 피자 만들기 */
/* 
    1. [크러스트, 씬, ?]도우만들기
    2. [토마토, 굴, ?]소스바르기
    3. [새우, 페퍼로니, ?]토핑올리기
    4. [파마산, 체다, 모짜렐라, ?]치즈뿌리기
    5. 굽기
    6. 피자 완성!
*/
const step1 = (step) => {
    setTimeout(() => {
        console.log(`도우 바르기!`);
        step();
    }, 1000);
};
const step2 = (step) => {
    setTimeout(() => {
        console.log(`소스바르기!`);
        step();
    }, 2000);
};
const step3 = (step) => {
    setTimeout(() => {
        console.log(`토핑올리기!`);
        step();
    }, 5000);
};
const step4 = (step) => {
    setTimeout(() => {
        console.log(`치즈뿌리기!`);
        step();
    }, 5000);
};
const step5 = (step) => {
    setTimeout(() => {
        console.log(`굽기!`);
        step();
    }, 5000);
};
const step6 = () => {
    setTimeout(() => {
        console.log(`피자 완성!`);
    }, 5000);
};

step1(() => {
    step2(()=> {
        step3(()=> {
            step4(()=> {
                step5(()=> {
                    step6();
                })
            })
        })
    })
});
