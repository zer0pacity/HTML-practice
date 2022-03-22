const knownValues = ["가위", "바위", "보"];

const judge=(you,opp)=>{
    if((you-opp)%3==1) return true;
    else return false;
}

const simulationStart=(number)=>{
    var t=number;
    var win=0;
    const w=[0,0,0];
    while(t--){
        const makeNum=()=>{
            var val=Math.floor(Math.random()*3);
            if(val==3)val=0;
            return val;
        }

        var choice=makeNum();
        var opp=makeNum();
        if(judge(choice,opp)){
            win++;
            w[choice]++;
        }
    }

    var rate=win/number*100;
    console.log("총 게임 횟수: "+number);
    console.log("승률: \""+rate+"%\"");
    console.log(`가장 승률이 좋은 전략: \"${knownValues[w.indexOf(Math.max(...w))]}\", ${Math.max(...w)}승`);
    console.log(`가장 승률이 낮은 전략: \"${knownValues[w.indexOf(Math.min(...w))]}\", ${Math.min(...w)}승`);
}

simulationStart(1e5);