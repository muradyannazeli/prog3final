/*

var clickCount = 0;
function clickHandler(evt) {
    clickCount++;
    console.log(evt);
    var str = "Thanks for clicking " + clickCount;
    this.innerText = str;
}

var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);
*/
/*
function bodyClick(evt) {
    console.log(evt.pageX, evt.pageY);
 }
 window.onclick = bodyClick;
 */

function windowLoad() {
    console.log("Window is loaded");
 }
 window.onload = windowLoad;
  //.addEventListener("onload",windowLoad)
 
 