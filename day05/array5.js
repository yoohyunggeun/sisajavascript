/**
 * 1. 센터리스트에서 여성전용 헬스장만 뽑기
 * 2. 가격이 300000만원 이하만 뽑기
 * 3. 무료 주차 가능한곳 뽑기
 */
const arr1 = gymsData.result.standardAdList.map((arr)=> {
    if(arr.isWomenOnly)
    return arr; 
});
console.log(arr1);
// const replaceArr = data.filtered.map((arr) => {
//     arr = {
//       name: arr.name,
//       gugun: arr.gugun,
//       dong: arr.dong,
//       image: arr.image
//     }  
//   return arr;
// });