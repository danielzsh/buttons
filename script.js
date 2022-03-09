const cnt = 4;
let hiddens = new Array(cnt + 1);
for (let i = 1; i <= cnt; i++) {
  hiddens[i] = document.getElementById("hidden" + i);
  hiddens[i].style.display = "none";
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
function button2() {
  if (show(hiddens[3])) return;
  show(hiddens[4]);
}