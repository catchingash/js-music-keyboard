$(document).ready( function() {
  function play(letter) {
    var audio_tag = document.getElementById(letter + 'Audio');
    audio_tag.currentTime = 0;
    audio_tag.play();
  };

  function keyPlay(keycode) {
    var o = { 99: 'c', 100: 'd', 101: 'e', 102: 'f', 103: 'g', 97: 'a', 98: 'b' };
    var letter = o[keycode];
    play(letter);
  }

  $('.note').click( function() {
    play( $(this).html() );
  });

  $(document).keypress( function(k) {
    keyPlay(k.keyCode);
  });
});
