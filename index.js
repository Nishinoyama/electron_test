
const {ipcRenderer} = require('electron');

let flag;

window.onload = function(){
}

function sendAndReply( mes ){
    const result = ipcRenderer.sendSync( 'message', mes );
    alert(result);
    return result;
}