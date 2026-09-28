const a = "icecream";
const b = a.includes("cream"); // position: input data:String return : boolean
const c = a.repeat(3); // position : roop data : number return : string
const d = a.startsWith("z"); // position : startSearch data : string return : boolean
const e = a.endsWith("z"); // position : endSearch data : string return : boolean
const f = a.toUpperCase(); // position : all upperCase data : x return : string
const g = a.toLowerCase(); // position : all lowerCase data : x return : string
const h = a.replace("i","w"); // position : charChange data : string,string return : string
const i = a.replaceAll("i","w"); // position : allCharChange data : string,string return : string
const j = a.split("r") // position : data Cut data : string return : array
const k = a.slice(0,4) // position : 0~3 data Cut data : number,number return : string
const l = a.length // position : length

const news =`Whether it's reporting on conflicts abroad and
political divisions at home, or covering the latest style
trends and scientific developments, New York Times video
journalists provide a revealing and unforgettable view of the world.
It's all the news that's fit to watch.`;

const user_lookingfor = window.prompt("찾고 싶은 단어");
console.log(news.includes(user_lookingfor) ? "있음" : "없음");