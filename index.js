
const {ipcRenderer} = require('electron');



window.onload = function(){

}

function sendAndReply( mes ){
    const result = ipcRenderer.sendSync( 'message', mes );
    alert(result);
    return result;
}