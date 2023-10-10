song = "";

function preload() {
  song = loadSound("music.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function setup() {
  canvas = crateCanvas(450, 475);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
  console.log("canvas");
}
function modelLoaded() {
  console.log("PoseNet Is Inicialized");
}

function gotPoses(results) {
  if (results.lenght > 0) {
    console.log(results);
    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log(
      "scoreRightWrist = " +
        scoreRightWrist +
        "scoreLeftWrist =" +
        scoreLeftWrist
    );
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log(
      "rightWristX = " + rightWristX + "rightWristY =" + righttWristY
    );
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
  }
}
