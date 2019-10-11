
const mainFrame = document.getElementById("mainFrame");

/*=============================
ゲーム初期化段階
=============================*/
var Game={};

Game.Launch = function(){
    Game.money = 0;
    Game.moneyVis = 0;
    Game.mps = 1;
    Game.moneyVisSet = function(){
        Game.moneyVis += Math.floor ( ( Game.money - Game.moneyVis ) / 2 );
    }

    Game.loopT = 0;
    Game.Main = function(){
        Game.moneyVisSet();
        mainFrame.innerText = 'Mny:' + Game.moneyVis;
        mainFrame.innerText += '\nMpS:' + Game.mps;
        mainFrame.innerText += '\nFPS:' + Game.getFps();

        Game.money += Game.mps / 30;
        Game.loopT++;
        setTimeout( Game.Main, 1000/30 );
        // requestAnimationFrame( Game.Main );
    }

    Game.frameNumber = 0;
    Game.fpsStartTime = 0;
    Game.getFps=function(){
        Game.frameNumber++;
        var currentTime = (Date.now()-Game.fpsStartTime)/1000;
        var result = Math.floor( Game.frameNumber/currentTime );
        if( currentTime>1 ){
            Game.fpsStartTime = Date.now();
            Game.frameNumber = 0;
        }
        return result;
    }

    Game.mpsUpgrade = function( inc ){
        Game.mps += inc;
    }

}

/*=============================
ゲーム開始段階
=============================*/
Game.Launch();
Game.Main();
