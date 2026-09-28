/**
 * 모험가 상점
 * 무기 선택 : 검(1.5), 활(1.3), 지팡이(1.8)
 * 방어구 선택 : 가죽(0.8) 사슬갑옷(0.9), 판금갑옷(1.2)
 * 물약 선택 : HP포션(0.3) MP포션(0.2) 엘릭서(0.45)
 * 길드 등급 : 브론즈[100%] 실버[90%] 골드[80%]
 * 출력 예시 => 용사님이 고르신 무기 : sword, 방어구 : leather, 물약 hp / totalPrice : ? 골드
 */
const type = {
    wepon:{
        sword:1.5,
        bow:1.3,
        static:1.8
    },
    armor:{
        leather:0.8,
        chain:0.9,
        plate:1.2
    },
    potion:{
        hp:0.3,
        mp:0.2,
        elixir:0.45
    },
    guild:{
        bronze:1,
        silver:0.9,
        gold:0.8
    }
}

const selectWepon = window.prompt(`무기`);
const selectArmor = window.prompt(`방어구`);
const selectPotion = window.prompt(`물약`);
const selectGuild = window.prompt(`길드`);
const totalPrice = ((type['wepon'][selectWepon]+type['armor'][selectArmor]+type['potion'][selectPotion])*1000)*type['guild'][selectGuild];
//console.log(type['wepon'][selectWepon]);
console.log(`용사님이 고르신 무기 : ${selectWepon}, 방어구 : ${selectArmor}, 물약 : ${selectPotion}, 총 금액 ${totalPrice} 골드`);
