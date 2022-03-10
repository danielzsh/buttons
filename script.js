const cnt = 10;
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
  $("#" + button.id).fadeIn();
}
function shown(button) {
  return !(button.style.display == "none");
}
function button1() {
  show(hiddens[1]);
  show(hiddens[2]);
}
function hidden1() {
  if (!shown(hiddens[4])) fail('https://www.youtube.com/watch?v=grd-K33tOSM');
  else {
    show(hiddens[5]);
    show(hiddens[6]);
  }
}
function hidden2() {
  if (shown(hiddens[7])) {
    show(hiddens[8]);
    hiddens[2].style.display = "none";
  }
  if (!shown(hiddens[3])) {
    show(hiddens[3]);
  }
  else show(hiddens[4]);
}
function hidden3() {
  alert('hint: you can click the same button twice'); 
  fail('https://www.youtube.com/watch?v=zpWbXltP43o')
}
function hidden4() {
  if (shown(hiddens[5])) {
    alert('read again buddy');
  }
  alert('whoaaa go back a bit'); 
  fail('https://www.youtube.com/watch?v=izGwDsrQ1eQ')
}
function hidden5() {
  if (shown(hiddens[7])) {
    alert('rip bozo');
    fail('https://www.youtube.com/watch?v=0GeQVtZ6Rd4');
  }
  show(hiddens[7]);
}
function hidden6() { // general kenobi
  if (shown(hiddens[9])) {
    if (hiddens[7].style.marginLeft == "37rem") {
      $("button").hide();
      $("br").hide();
      $("#hidden10").fadeIn(5000);
      return;
    }
    hiddens[7].style.marginLeft = "37rem";
    return;
  }
  alert('alert: baited');
  fail('https://www.youtube.com/watch?v=rEq1Z0bjdwc');
}
function hidden7() { // click here
  alert('up, up, up...');
  fail('https://www.youtube.com/watch?v=KFziHFHBCtg')
};
function hidden8() {
  show(hiddens[9]);
  hiddens[9].style.marginLeft = "20rem";
  hiddens[8].style.display = "none";
}
function hidden9() {

}