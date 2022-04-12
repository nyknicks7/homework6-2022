var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#faster').addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate /= .95;
	console.log("Current speed is " + video.playbackRate);
});

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Current speed is : " + video.playbackRate);
	video.playbackRate *= .95;
	console.log("Current speed is : " + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Video current time is", video.currentTime)
});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	});
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = (document.querySelector("#slider").value)/100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
	});
	
document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
	});