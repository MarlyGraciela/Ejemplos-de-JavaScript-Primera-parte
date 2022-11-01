function onKeyUp(event) {
console.log('onKeyUp:' + event.key);
}

function onKeyPress(event) {
console.log('onKeyPress:' + event.key);
}
//function onKeyDown(event) {
//console.log('onKeyDown:' + event.key);
//}

document.addEventListener('keypress', onKeyPress);
//document.addEventListener('keydown', onKeyDown);
