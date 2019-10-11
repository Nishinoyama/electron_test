
window.onload = function(){
    graduationRotate()
}

const {ipcRenderer} = require('electron');

function sendAndReply( mes ){
    const result = ipcRenderer.sendSync( 'message', mes );
    alert(result);
    return result;
}

function graduationRotate(){
    let gradBox = document.getElementById("graduation").children[0];
    for (let i = 0; i < 26; i++) {
        gradBox.innerHTML += '<div class="box' + i + '"></div>'
    }
}
