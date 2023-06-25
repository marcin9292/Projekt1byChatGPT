function playDrumSound(keyCode) {
    const drum = document.querySelector(`div[data-key="${keyCode}"]`);
  
    if (drum) {
      drum.classList.add('playing');
      const sound = drum.querySelector('audio');
      sound.currentTime = 0;
      sound.play();
    }
  }
  
  function removePlayingClass(event) {
    if (event.propertyName === 'transform') {
      event.target.classList.remove('playing');
    }
  }
  
  document.addEventListener('keydown', function(event) {
    const key = event.keyCode.toString();
    playDrumSound(key);
  });
  
  document.addEventListener('keyup', function(event) {
    const key = event.keyCode.toString();
    const drum = document.querySelector(`div[data-key="${key}"]`);
  
    if (drum) {
      drum.classList.remove('playing');
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const drums = document.querySelectorAll('.drum');
  
    drums.forEach(function(drum) {
      drum.addEventListener('click', function() {
        const keyCode = this.getAttribute('data-key');
        playDrumSound(keyCode);
        drum.classList.add('playing');
  
        setTimeout(function() {
          drum.classList.remove('playing');
        }, 100);
      });
  
      drum.addEventListener('transitionend', removePlayingClass);
    });
  });