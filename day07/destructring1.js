// destructring 분해구조
const std = { name: "윤정은", age: 29, mbti: "enfp", parttime: ["코인노래방", "옷가게", "도토루 카페"] };

const { name, mbti, parttime } = std;
const [coin] = parttime;

const cont = [
    { name: "최선호",
    parttime:[
        {name:"macnal", location:"스기나미구"},
        {name:"it아르바이트", location:"시나가와"}
    ]
    },
    { name: "황다현",
        parttime:[
            {name:"엑셀시오스", location:"추오구"},
        ]
    },
    { name: "유희찬",
        parttime:[
            {name:"호텔서빙", location:"포항"},
        ]
    },
    { name: "전수효",
        parttime:[
            {name:"방탈출카페 알바", location:"서울"},
            {name:"cgv", location:"김포"}
        ]
    }
]
const [one,two] = cont;
const [first,second] = one.parttime;
const {location} = first;