//variable la store the id 

let videoPlay = document.getElementById('play'),
videoPause = document.getElementById('pause'),
videoForward = document.getElementById('f10'),
videoBackward = document.getElementById('b10'),

videoVolume = document.getElementById('volume'),
videoMute = document.getElementById('mute'),
videoUnMute = document.getElementById('unmute'),

videoDownload = document.getElementById('download'),
videoFullScreen = document.getElementById('fscreen'),
videoQuality= document.getElementById('vquality'),
videoOpen =document.getElementById('main-video');
 //function method execute
function v_play(){
    console.log('video play');
    videoOpen.play();
}
function v_pause(){
    console.log('video pause');
    videoOpen.pause();
}
function v_f10(){
    console.log('video forward');
    let cTime = videoOpen.currentTime;
    //declare variable and forward the time
    cTime = cTime + 10;
    //play the new time
    videoOpen.currentTime =cTime;
}
function v_b10(){
    console.log('video backward');
    //declare variable and backward the time
    let cTime = videoOpen.currentTime;
    cTime = cTime - 10;
    //play the new time
    videoOpen.currentTime =cTime;
}
function v_volume(){
    
    let volumeupdate = videoVolume.value;
    console.log('volume update',volumeupdate);

    volumeupdate =volumeupdate/100;
    videoOpen.volumeupdate;
}
function v_mute(){
    console.log('video mute');
    videoOpen.muted =true;
}
function v_unmute(){
    console.log('unmute');
    videoOpen.muted =false;
}
function v_down(){
    console.log('video down');
}
function v_quality(){
    console.log('video quality');
    //get select path
    let targetpath = this.value;
    
    cTime =videoOpen.currentTime;
    //change the file path of the video
    videoOpen.setAttribute('src',targetpath);
    //change current time
    videoOpen.currentTime = cTime;
    //play the video 
    videoOpen.play();
}
function v_download(){
    console.log('video download');
    
}
function v_fullscreen(){
    console.log('Full screen');
}

videoPlay.addEventListener('click',v_play);
videoPause.addEventListener('click',v_pause);
videoForward.addEventListener('click',v_f10);

videoBackward.addEventListener('click',v_b10);
videoVolume.addEventListener('click',v_volume);
videoMute.addEventListener('click',v_mute);
videoUnMute.addEventListener('click',v_unmute);

videoQuality.addEventListener('change',v_quality);
videoDownload.addEventListener('click',v_download);
videoFullScreen.addEventListener('click',v_fullscreen);

