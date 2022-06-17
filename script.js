var playButton = document.getElementById("playMusic");
playButton.addEventListener("click", playPause);

myAudio = document.getElementById("mySong");
function playPause() {
	if (mySong.paused) {
		mySong.play();
		playButton.innerHTML = '<i class="bi bi-volume-up"></i>';
	}
	else {
		mySong.pause();
		playButton.innerHTML = '<i class="bi bi-volume-mute"></i>';
	}
}