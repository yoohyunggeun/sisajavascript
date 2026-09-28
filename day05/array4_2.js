/* 1. name, 구, 동, image로 데이터 바꾸기 [{name:? gugun:?, dong:?, image:?},....]*/
const replaceArr = data.filtered.map((arr) => {
    arr = {
      name: arr.name,
      gugun: arr.gugun,
      dong: arr.dong,
      image: arr.image
    }  
  return arr;
});
console.log(replaceArr);