function setup()
{
    canvas = createCanvas(640,480)
    canvas.position(110,240)
    video = createCapture(VIDEO)
    video.hide();
}
function draw()
{
    image(video ,0,0,640,480);
    stroke(0,0,0)
    fill(255);
    ellipse(630, 470, 60, 60);
    fill(255);
    rect(0, 40, 30, 470);
    fill(255);
    rect(30, 450, 570, 30);
    stroke(255,255,255)
    fill(0);
    ellipse(10, 10, 60, 60);
    fill(0);
    rect(40, 0, 570, 30);
    fill(0);
    rect(610, 0, 30, 440);

}
function take_snapshot()
{
    save('student_name.png');
}
