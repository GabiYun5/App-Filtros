var nx = 0
var ny = 0

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300)
    video.hide();
    modelo = ml5.poseNet(video, listo)
    modelo.on("pose", ResPose)
}
function listo(){console.log("Hola Mundo! Buenos Dias")}
function ResPose(res){
    if (res.length > 0){
        console.log(res)
        nx = res[0].pose.nose.x
        ny = res[0].pose.nose.y
    }
}

function preload(){
    gato = loadImage("gato.png")
}

function draw(){
    image(video, 0, 0 ,400, 300)
    fill("red")
    image(gato, nx - 40, ny - 30, 80, 80)
    //circle(nx,ny,30)
}

function take_snapshot(){
    save("AppFiltros_Gato.png")
}