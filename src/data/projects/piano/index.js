(function () {
  const counters = {
  counter65: false,
  counter83: false,
  counter68: false,
  counter70: false,
  counter71: false,
  counter72: false,
  counter74: false,
  counter75: false
}

const keyPress = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!counters["counter" + e.keyCode]){
    if(!audio) return;
    audio.currentTime = .1;
    audio.play();
    key.classList.add("playing");
    counters["counter" + e.keyCode] = true;
  }
};

const keyUp = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;

  audio.pause();
  key.classList.remove("playing");

  counters["counter" + e.keyCode] = false;
};

window.addEventListener("keydown", keyPress);
window.addEventListener("keyup", keyUp);

})();

