import sound from '../sound/examples_player_audio_80s_vibe.mp3'

export const timeStart = (event) => {
  event.preventDefault();
  let timerInput = document.getElementById('time');
  let timerShow = document.getElementById('timer');
  let timeMinut = parseInt(timerInput.value) * 60;

  function start() {
	  window.timerId = window.setInterval(timer, 1000);
  }
  function timer() {
    let seconds = timeMinut%60
    let minutes = timeMinut/60%60
    let hour = timeMinut/60/60%60

    if (timeMinut < 0) {
      clearInterval(window.timerId);
      const audio = new Audio(sound);
      audio.play();
    } else {
      let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
      timerShow.innerHTML = strTimer;
    }
    --timeMinut;
  }

  start();
}

export function timeStop(event) {
  event.preventDefault();
  window.clearInterval(window.timerId);
}