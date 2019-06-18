class Sort {
    constructor(numberString) {
        this.numsArr = numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.listOfIndexes = [];
    }


    decreaseSort() {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.listOfIndexes.length !== 0) {
                [this.arr[this.listOfIndexes[0]], this.arr[this.listOfIndexes[1]]] = [this.arr[this.listOfIndexes[1]], this.arr[this.listOfIndexes[0]]];
                this.listOfIndexes.shift(this.listOfIndexes[0]);
                this.listOfIndexes.shift(this.listOfIndexes[1]);

                return this.arr;
            }

        }
        return this.arr;
    }


    increaseSort() {

        // let flag = true;
        // while (flag) {
        //     flag = false;

            for (let i = 0; i < this.arr.length-1; i++) {
                for (let j = 0; j < this.arr.length-1-i; j++) {
                    if (this.arr[j+1] < this.arr[j]) {
                        [this.arr[j+1], this.arr[j]] = [this.arr[j], this.arr[j+1]];
                        this.listOfIndexes = [j, j + 1, ...this.listOfIndexes];
                        // flag = true;
                        return this.arr;
                    }
                }
            }
        // }
        return this.arr;

    }


}

class Draw {
    constructor(array) {
        this.arr = array;
        this.columnIndexArr = [];

    }


    drawArray() {

        const FIXED_COLUMN_HEIGHT = 15;

        const OFFSET = 30;

        let container = document.createElement('div');
        container.className = "line__inner";
        container.id = "line__inner";


        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            this.columnIndexArr.push(i);
            newDiv.style.height = `${FIXED_COLUMN_HEIGHT * this.arr[i]}px`;
            newDiv.style.left =  `${i * OFFSET}px`;
            container.appendChild(newDiv);
        }
        document.body.appendChild(container);
    }


    movement(newArr) {

        const bg = {
            first : 0,
            second : 1
        };


        const COLUMN_MARGIN = 30;

        const [...columns] = document.getElementsByClassName('line'); //columns => HTML objects


        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] !== this.arr[i]) {
                [this.columnIndexArr[i], this.columnIndexArr[i+1]] = [this.columnIndexArr[i+1], this.columnIndexArr[i]];
                bg.first = this.columnIndexArr[i];
                bg.second = this.columnIndexArr[i+1];

                break;
            }
        }
        for (let i = 0; i < columns.length; i++) {
            columns[this.columnIndexArr[i]].style.left = `${i * COLUMN_MARGIN}px`;
            columns[this.columnIndexArr[i]].style.backgroundColor = 'dodgerblue';
            columns[bg.first].style.backgroundColor = 'red';
            columns[bg.second].style.backgroundColor = 'red';


        }
        this.arr = [...newArr];// плохо

    }


}


const inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => renderCollection());


const renderCollection = () => {
    let inputValue = document.querySelector('#input').value;
    console.log(inputValue);

    let sort = new Sort(inputValue);

    let draw = new Draw(sort.arr);


    draw.movement(sort.arr);
    draw.drawArray();


    let decrease = document.getElementById('dec');
    decrease.addEventListener('click', () => draw.movement(sort.decreaseSort()));

    let increase = document.getElementById('inc');
    increase.addEventListener('click', () => draw.movement(sort.increaseSort()));

};
