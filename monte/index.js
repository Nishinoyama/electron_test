
// モンテカルロ法.io作ろうぜ！

window.onload = function(){
    document.body.appendChild( app.view );
    app.stage.addChild( basedCircle );
    app.stage.addChild( dotContainer );
    app.renderer.plugins.interaction.on('pointerdowm', onPointerDown );
    app.stage.addChild( result );

    basedCircle.lineStyle( 3, 0x000000, 1 );
    basedCircle.beginFill( 0xFFFFFF, 1 );
    basedCircle.drawCircle( 200,200,200 );
    basedCircle.endFill();


    this.setInterval( onPointerDown, 10 );

}
 
const app = new PIXI.Application({
    width: 400, height: 500,
    backgroundColor: 0xFFFFFF,
    resolution: window.devicePixelRatio || 1,
});

const basedCircle = new PIXI.Graphics();
const dotContainer = new PIXI.Container();
const result = new PIXI.Text('あたり率 0% 円周率 0');
result.y = 400;

function onPointerDown() {

    let dotPointed = new PIXI.Graphics();

    let x = Math.random() * 400;
    let y = Math.random() * 400;

    let absx = x-200;
    let absy = y-200;

    let color = 0x000000;
    if( Math.sqrt(absx*absx+absy*absy) <= 200 ) color = 0xF00000;

    // console.log(Math.sqrt(absx*absx+absy*absy));
    // console.log(color);

    dotPointed.lineStyle( 0 , color, 0);
    dotPointed.beginFill( color, 1 );
    dotPointed.drawCircle( x-1,y-1,2 );
    dotPointed.endFill();

    dotContainer.addChild( dotPointed );

    hitNum++;
    if( color != 0x000000 ) hitIn++;
    hitProb = hitIn/hitNum;
    calcPI = 4*hitProb;

    result.text = 'あたり率 ' + hitProb + '%\n円周率 ' + calcPI;

}

// ヒット率
let hitNum = 0; 
let hitIn = 0;
let hitProb = 0;
let calcPI = 0.0;

