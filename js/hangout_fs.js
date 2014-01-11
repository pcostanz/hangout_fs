
// SOUND

// this pulls the id of the button clicked so long as onclick is set to playSound(this)
// set the id to the wav file name (without extension)

function playSound(soundfl) {

  var soundURL = 'http://leaguehangout.appspot.com/static/hangout_fs/sounds/' + soundfl + '.wav';
  console.log('playSound fn fired, playing ' + soundURL);
  var soundOBJ = gapi.hangout.av.effects.createAudioResource(
    soundURL).createSound({loop: false, localOnly: false});

  soundOBJ.play();
}


$(document).ready(function(){

	$('.buttons').on('click', 'a', function(e){
		e.preventDefault();
		var soundId = $(this).attr('id');
		console.log('button clicked, playing sound file ' + soundId);
		playSound(soundId);
	});

})


gadgets.util.registerOnLoadHandler(init);