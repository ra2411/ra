var vid = document.getElementById("video");

function playVid() {
	vid.play();
}

function pauseVid() {
	vid.pause();
}

function display() {
	if(vid.style.display === "block") {
		vid.style.display = "none";
	}
	else {
		vid.style.display = "block";
	}
}

function video() {
	setTimeout(playVid, 5000);
}
