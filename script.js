const cnt = 7;
let hiddens = new Array(cnt + 1);
for (let i = 1; i <= cnt; i++) {
  hiddens[i] = document.getElementById("hidden" + i);
  hiddens[i].style.display = "none";
  hiddens[i].setAttribute("onclick", hiddens[i].id + "()");
}
function fail(url) {
  window.open(url, '_blank');
  document.location.reload(true);
}
function show(button) {
  if (button.style.display == "none") {
    button.style.display = "inline";
    return true;
  }
  return false;
}
function button1() {
  show(hiddens[1]);
  show(hiddens[2]);
}
function hidden1() {
  if (show(hiddens[4])) fail('https://www.youtube.com/watch?v=grd-K33tOSM');
  else {
    show(hiddens[5]);
    show(hiddens[6]);
  }
}
function hidden2() {
  if (show(hiddens[3])) return;
  show(hiddens[4]);
}
function hidden3() {
  alert('hint: you can click the same button twice'); 
  fail('https://www.youtube.com/watch?v=zpWbXltP43o')
}
function hidden4() {
  if (!show(hiddens[5])) {
    alert('read again buddy');
  }
  alert('whoaaa go back a bit'); 
  fail('https://www.youtube.com/watch?v=izGwDsrQ1eQ')
}
function hidden5() {
  if (!show(hiddens[7])) {
    alert('rip bozo');
    fail('https://www.youtube.com/watch?v=0GeQVtZ6Rd4');
  }
  show(hiddens[7]);
}
function hidden6() {
  alert('alert: baited');
  fail('https://www.youtube.com/watch?v=rEq1Z0bjdwc');
}
function hidden7() {
  
}