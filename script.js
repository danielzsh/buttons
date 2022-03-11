const cnt = 18;
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
  else alert('whoaaa go back a bit'); 
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
      $("#hidden10").fadeIn(2000);
      $("#hidden11").fadeIn(2000);
      $("#hidden12").fadeIn(2000);
      const br = document.createElement('br');
      document.body.append(br);
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
function hidden11() {
  $("#hidden10").hide();
  $("#hidden11").hide();
  $("#hidden12").hide();
  show(hiddens[13]);
  show(hiddens[14]);
  show(hiddens[15]);
}
function hidden12() {
  alert('Sorry, you have to be 18+ to continue.');
  document.location.reload(true);
}
function hidden14() {
  alert('Sorry, this is not family friendly.');
  document.location.reload(true);
}
function hidden15() {
  $("#hidden13").hide();
  $("#hidden14").hide();
  $("#hidden15").hide();
  show(hiddens[16]);
  show(hiddens[17]);
  show(hiddens[18]);
}
function hidden17() {
  rickroll();
}
function hidden18() {
  rickroll();
}
function rickroll() {
  for (let i = 0; i < 4; i++) {
    let video = document.createElement('video');
    video.src = "rickroll.mp4";
    video.autoplay = true;
    video.style.width = "25%";
    document.body.appendChild(video);
  }
  document.body.appendChild(document.createElement('br'));
}