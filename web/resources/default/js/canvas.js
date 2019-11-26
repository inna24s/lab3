document.getElementById("myCanvas").innerHTML = "<canvas id='myCanvas1' width='400' >";
var canvas= document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
var canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

function draw() {
    // Сохраняем текущую матрицу трансформации
    ctx.save();
    // Используем идентичную матрицу трансформации на время очистки
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Возобновляем матрицу трансформации
    ctx.restore();
    ctx.fillStyle = "#ff6100";

//Drawing the rectangle
    ctx.fillRect(canvasSize * 0.5, canvasSize * 0.5, canvasSize * 0.2, canvasSize * 0.4);

//Drawing the quarter of a circle
    ctx.beginPath();
    ctx.arc(canvasSize * 0.5, canvasSize * 0.5, canvasSize * 0.2, Math.PI, 1.5 * Math.PI);
    ctx.lineTo(canvasSize * 0.5, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.1, canvasSize * 0.5);
    ctx.fill();

//Drawing the triangle
    ctx.beginPath();
    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.1, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.5, canvasSize * 0.7);
    ctx.fill();

//Drawing the coordinates
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#FFFFFF";

    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.05);
    ctx.lineTo(canvasSize * 0.5, canvasSize * 0.95);
    ctx.moveTo(canvasSize * 0.05, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.95, canvasSize * 0.5);

    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.05);
    ctx.lineTo(canvasSize * 0.5125, canvasSize * 0.075);
    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.05);
    ctx.lineTo(canvasSize * 0.4875, canvasSize * 0.075);

    ctx.moveTo(canvasSize * 0.95, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.925, canvasSize * 0.4875);
    ctx.moveTo(canvasSize * 0.95, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.925, canvasSize * 0.5125);

    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.1);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.1);
    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.3);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.3);
    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.7);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.7);
    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.9);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.9);

    ctx.moveTo(canvasSize * 0.1, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.1, canvasSize * 0.505);
    ctx.moveTo(canvasSize * 0.3, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.3, canvasSize * 0.505);
    ctx.moveTo(canvasSize * 0.7, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.7, canvasSize * 0.505);
    ctx.moveTo(canvasSize * 0.9, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.9, canvasSize * 0.505);

//Drawing necessary text data
    ctx.font = "15px Arial";
    ctx.fillText("Y", canvasSize * 0.5125, canvasSize * 0.05);
    ctx.fillText("X", canvasSize * 0.95, canvasSize * 0.4875);

    ctx.stroke();
}
function textR(str) {
    ctx.fillText(str, canvasSize * 0.5125, canvasSize * 0.1125);
    ctx.fillText(str + "/2", canvasSize * 0.5125, canvasSize * 0.3125);
    ctx.fillText(str, canvasSize * 0.8875, canvasSize * 0.4875);
    ctx.fillText(str + "/2", canvasSize * 0.6875, canvasSize * 0.4875);
    ctx.fillText("-" + str, canvasSize * 0.5125, canvasSize * 0.9125);
    ctx.fillText("-" + str + "/2", canvasSize * 0.5125, canvasSize * 0.7125);
    ctx.fillText("-" + str, canvasSize * 0.0875, canvasSize * 0.4875);
    ctx.fillText("-" + str + "/2", canvasSize * 0.2875, canvasSize * 0.4875);
}
function numR(str1) {
    ctx.fillText(str1, canvasSize * 0.5125, canvasSize * 0.1125);
    ctx.fillText(str1/2, canvasSize * 0.5125, canvasSize * 0.3125);
    ctx.fillText(str1, canvasSize * 0.8875, canvasSize * 0.4875);
    ctx.fillText(str1/2, canvasSize * 0.6875, canvasSize * 0.4875);
    ctx.fillText("-" + str1, canvasSize * 0.5125, canvasSize * 0.9125);
    ctx.fillText("-" + str1/2, canvasSize * 0.5125, canvasSize * 0.7125);
    ctx.fillText("-" + str1, canvasSize * 0.0875, canvasSize * 0.4875);
    ctx.fillText("-" + str1/2, canvasSize * 0.2875, canvasSize * 0.4875);
}


const yText = document.getElementById("form:y");
const rt=document.getElementById("form:rt");
const xSpin = document.getElementById("form:x_input");

yText.value="";
rt.value="";
xSpin.value="";

draw();
if(rt.value.length===0)textR('R');

window.setR=setR;
function setR(r) {
    rt.value=r;
    draw();
    numR(rt.value);
}


function checkDot(x, y, r) {

    if ((x <= 0 && y >= 0 && x*x + y*y <= r*r/4) ||
        (x >= 0 && y <= 0 && x <= r/2 && y >= -r) ||
        (x <= 0 && y <= 0 && y >= (-1/2*x - r/2)))
        return true;
    else
        return false;
}


canvas.addEventListener('click', raz, false);
let btn = document.getElementById("form:sub");

function raz() {
    var log = document.getElementById("log");
    if(rt.value.length===0) log.innerText="Выберите R!";
    else {
        let k = rt.value;
        var clickX = +(((event.layerX == undefined ? event.offsetX : event.layerX) - 200) / 80 * k / 2).toFixed(3);
        var clickY = +(((event.layerY == undefined ? event.offsetY : (-event.layerY)) + 200) / 80 * k / 2).toFixed(3);

        if (checkDot(clickX, clickY, k)){
            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(clickX * 160 / k + 200, -clickY * 160 / k + 200, 5, 5);}
        else {
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(clickX * 160 / k + 200, -clickY * 160 / k + 200, 5, 5);
        }

        log.innerText = 'Координаты клика: x:' + (clickX) + ' y: ' + clickY;
        yText.value = clickY;
        xSpin.value = clickX;
        if (check) {
            window.onload = setTimeout(function(){btn.click()}, 3000);
            reaction();
            com.innerText="";
            document.getElementById("star").innerHTML="";
        }
        function reaction() {
            count=0;
            document.getElementById("star").innerHTML="";
            com.innerText="";
            if (checkDot(clickX, clickY, k)) {
                image.innerText = "";
                image.innerHTML = "<video poster='resources/default/im/smalte.gif'>";
                mus.innerHTML = "<audio src='resources/default/im/Alex.wav' autoplay='autoplay'>";
            } else {
                image.innerHTML = "<video poster='resources/default/im/lav.gif'>";
                mus.innerHTML = "<audio src='resources/default/im/laugh.wav' autoplay='autoplay'>";
            }
            window.onload = setTimeout(removeImg, 3800);

            function removeImg() {
                com.innerText="";
                image.innerHTML = "";
            }

        }




    }
}

canvas.onmousemove = function (event) {
    if (rt.value.length===0) log.innerText = "Выберите R!";
    else {
        let k = rt.value;
        var clickX = +(((event.layerX == undefined ? event.offsetX : event.layerX) - 200) / 80 * k / 2).toFixed(3);
        var clickY = +(((event.layerY == undefined ? event.offsetY : (-event.layerY)) + 200) / 80 * k / 2).toFixed(3);

        log.innerText = 'Координаты клика: x:' + (clickX) + ' y: ' + clickY;
    }
}







