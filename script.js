const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const replay = document.getElementById("replay");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// play and pause vid
function toggleVidStatus(){
  
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }

}

// update play/pause icon
function updatePlayIcon(){
  
  if(video.paused){
    play.innerHTML = `<i class="fa fa-play-circle-o fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause-circle-o fa-2x"></i>`;
  }

}

// update progress and timestamp
function updateProgress(){
  progress.value = (video.currentTime / video.duration) * 100;

  // minutes
  let minutes = Math.floor(video.currentTime / 60);
  if(minutes < 10){
    minutes = `0${String(minutes)}`;
  }

  // seconds
  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10){
    seconds = `0${String(seconds)}`;
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;

}

// set vid time
function setVidProgress(){
  video.currentTime = (+progress.value * video.duration) / 100;
}

// stop vid
function stopVid(){
  video.currentTime = 0;
  video.pause();
}

// replay vid
function replayVid(){

  video.currentTime = 0;
  video.play();

}

// events
video.addEventListener("click", toggleVidStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVidStatus);
stop.addEventListener("click", stopVid);
replay.addEventListener("click", replayVid);
progress.addEventListener("change", setVidProgress);