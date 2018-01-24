var vid = document.getElementById("video");

function display() {
	if(vid.style.display === "block") {
		vid.style.display = "none";
	}
	else {
		vid.style.display = "block";
	}
}


function playVid() {
	vid.play();
}

function pauseVid() {
	vid.pause();
}

function video() {
pauseVid();
	setTimeout(playVid, 5000);
}
