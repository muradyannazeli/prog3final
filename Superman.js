
class Superman extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 20;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {


        var newCell0 = this.chooseCell(0);
        var newCell1 = this.chooseCell(1);
        var uteliqner = newCell0.concat(newCell1);
        var newCell = random(uteliqner)
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy--;
        }

    }
    eat() {


        var newCell1 = this.chooseCell(3);
        var newCell2 = this.chooseCell(2);
        var m = newCell1.concat(newCell2);
        var newCell = random(m);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }



            this.y = newY;
            this.x = newX;
            this.energy += 1;

        }

    }
    mul() {

        var newCell1 = this.chooseCell(3);
        var newCell2 = this.chooseCell(2);
        var g = newCell1.concat(newCell2);
        var newCell = random(g);

        if (this.energy >= 16 && newCell) {
            var newSuperman = new Superman(newCell[0], newCell[1], this.index);
            supermanArr.push(newSuperman);

            this.energy -= 8;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in supermanArr) {
                if (supermanArr[i].x == this.x && supermanArr[i].y == this.y) {
                    supermanArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}