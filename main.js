song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
song = loadSound("music.mp3");
}
function setup(){
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
console.log('poseNet is Active');
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("righttWristX = " + rightWristX +"rightWristY = "+ rightWristY);
    }
    if(score_leftWrist > 0.2)
{
circle(leftWristX, leftWristY,20);
InNumberleftWristY = Number(leftWristY);
remove_decimal = floor(InNumberleftWristY);
volume = remove_decimal/500;
document.getElementById("volume").innerHTML = "volume = " + volume;
song.setVolume(volume);
}
    }
function draw(){
image(video, 0, 0, 600, 500);
}
function play(){
song.play();
}