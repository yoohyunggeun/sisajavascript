/**
 * quiz
 * 피자 만들기
 * 도우 3 -> 소스 2 -> 토핑 2 -> 치즈 1 -> 굽기 3 -> 피자 완성! 2
 */

const a = (x, time) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(x);
    }, +time*1000);
  });
};
a("도우",3).then((x) => {
    console.log(`${x}`);
    a("소스",2).then((x) => {
        console.log(`${x}`);
        a("토핑",2).then((x) => {
            console.log(`${x}`);
            a("치즈",1).then((x) => {
                console.log(`${x}`);
                a("피자 완성!",2).then((x) => console.log(`${x}`));
            });
        });
    });
});
