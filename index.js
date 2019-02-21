class SortAndDraw  {
    constructor(numbersString) {
        this.nums = numbersString;
        this.arr;
        this.l = [];
        this.newDiv;
        this.container;
    }

    getArray()  {
        this.arr = this.nums.split("").map(element => Number(element));
        return  this.arr;

    }

    showArray() {
        return this.drawArray(this.getArray());
    }

    increaseSort() {
        for (let i = 0; i < this.arr.length - 1; i++) {
            for (let j = i + 1; j < this.arr.length; j++) {
                if (this.arr[i] > this.arr[j]) {
                    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
                    this.l = [i, j, ...this.l];
                    return this.drawArray(this.arr);
                }
            }
        }

    }

    backSort()  {
        for (let i = 0; i < this.arr.length; i++)
        {
            if (this.l.length != 0) {
                [this.arr[this.l[0]], this.arr[this.l[1]]] = [this.arr[this.l[1]], this.arr[this.l[0]]];
                this.l.shift(this.l[0]);
                this.l.shift(this.l[1]);
                return this.drawArray(this.arr);
            }
        }


    }


    drawArray(arr) {

        this.container = document.createElement('div');
        this.container.className = "line__inner";
        document.body.appendChild(this.container);
        for (let i = 0; i < arr.length; i++) {

            this.newDiv = document.createElement('div');
            this.newDiv.innerHTML = arr[i];
            this.newDiv.id = arr[i];
            this.newDiv.className = "line";
            this.container.appendChild(this.newDiv);
            this.newDiv.style.height = 15 * arr[i]+'px';
            this.newDiv.style.display = 'block';
        }
        document.body.insertBefore(this.container, h1);


        return this.newDiv;
    }

}




// let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(input.value);


let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.showArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.increaseSort());


let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.backSort());



