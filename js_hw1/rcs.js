const strategy = ["가위", "바위", "바위", "보"];

const knownValues = ["가위", "바위", "보"];

var rate, cnt=0;

const check = (arr) => {
    for(var i=0; i<arr.length; i++) {
        if(knownValues.includes(arr[i])==false){
            return false;
        }
    }
    return true;
}

const gameStart = (arr) => {
    if(!check(arr)) {
        console.log("잘못된 형식의 strategy");
    }

    var win=0;

    for(var i=0;i<arr.length;i++){
        const opponent=Math.floor(Math.random()*3);
        if(opponent==3) opponent=0;

        var choice=knownValues.indexOf(strategy[i]);
        switch(choice-opponent){
            case 1: case -2:
                win++;
            default:
                cnt++;
        }
    }

    rate=win/cnt*100;
}

gameStart(strategy);
console.log("총 게임 횟수 : "+cnt);
console.log("승률 : \""+rate+"%\"");