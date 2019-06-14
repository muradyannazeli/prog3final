var matrix = [

];

var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var supermanArr = [];
var ironmanArr = [];
var side = 24;
var w = 30;
var h = 30;

function genMatrix(w, h) {
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.round(Math.random() * 230);
            if (r < 50) r = 0;
            else if (r < 100) r = 1;
            else if (r < 200) r = 2;
            else if (r < 210) r = 3;
            else if (r < 220) r = 4;
            else if (r < 230) r = 5;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

function setup() {
	genMatrix(w,h);
    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
            else if (matrix[y][x] == 3) {
                var pr = new Predator(x,y,3);
                predatorArr.push(pr);
                
            }
            else if( matrix[y][x] == 4){
                var sp = new Superman(x,y,4);
                supermanArr.push(sp);
            }
            else if( matrix[y][x] == 5){
                var ir = new Ironman(x,y,5);
                ironmanArr.push(ir);
            }
        }
    }
 
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("cyan");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
        
    }
     for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (var i in supermanArr) {
        supermanArr[i].move();
        supermanArr[i].eat();
        supermanArr[i].mul();
        supermanArr[i].die();
    }
    for (var i in ironmanArr) {
        ironmanArr[i].move();
        ironmanArr[i].eat();
        ironmanArr[i].die();
    }
    

}
