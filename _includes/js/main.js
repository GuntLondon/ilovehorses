/*
 * Application-specific JavaScript
 */
var playing = false;
var sound = new Howl({
  urls: ['./_includes/audio/i_love_horses.mp3'],
  autoplay: true,
  loop: true,
  onend: function() {
    playing = false;
  }
});

// for touch devices - no autoplay
document.addEventListener('touchstart', playSound);

function playSound() {
  if (!playing) {
    sound.play();
    playing = true;
  }
}


function externalLinks() {
  if (!document.getElementsByTagName) return;
  var anchors = document.getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++) {
    var anchor = anchors[i];
    if (anchor.getAttribute('href') && hasValue(anchor.rel, 'external')) {
      anchor.target = '_blank';
      addClass(anchor,'external');
    }
  }
}


/* timer */
var seconds = 1,
    obj = new Timer(),
    secondEl = document.getElementById("seconds");

    obj.Interval = 1000;
    obj.Tick = tick;
    obj.Start();

function tick() {
  secondEl.innerHTML = ++seconds + " seconds";
}
