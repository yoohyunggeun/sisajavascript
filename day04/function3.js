
const makeRemen = (x) =>{
    console.log("물끓이기");
    x();
    console.log("물끓이기5");
}

const recipeBuldak = () =>{
    console.log("물끓이기2");
    console.log("물끓이기3");
    console.log("물끓이기4");
}

const recipeRice = () =>{
    console.log("물끓이기22");
    console.log("물끓이기33");
    console.log("물끓이기44");
}

makeRemen(recipeBuldak);
makeRemen(recipeRice);

const activeSkill = (skill) =>{
    console.log("casting");
    skill();
    console.log("seccess");
}
const fire=()=>{
    console.log("fireBall");
}
const thunder=()=>{
    console.log("thunderBolt");
}
const ice=()=>{
    console.log("iceAge");
}
activeSkill(fire);
activeSkill(thunder);
activeSkill(ice);