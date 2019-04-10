class SortAndDraw {
    constructor(numberString) {
        this.numsArr =  numberString.split("").map(element => Number(element));
        this.arr = this.numsArr.slice(0);
        this.storage = [this.numsArr];
        this.indSaver = {};

    }
    decreaseSort() {
        this.arr = this.storage.shift();
        return this.arr;
    }

    increaseSort()  {

        let flag = true;
        while (flag) {
            flag = false;
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]];
                    this.storage = [this.arr.slice(0), ...this.storage];
                    flag = true;
                    return this.arr;
                }
            }
        }


    }


    drawArray() {
        let container = document.createElement('div');
        container.className = "line__inner";
        document.body.appendChild(container);
        for (let i = 0; i < this.arr.length; i++) {

            let newDiv = document.createElement('div');
            newDiv.innerHTML = this.arr[i];
            newDiv.id = this.arr[i];
            newDiv.className = "line";
            container.appendChild(newDiv);
            newDiv.style.height = 15 * this.arr[i]+'px';
            newDiv.style.display = 'block';
        }

    }


    changeNums() {

        if (this.storage.length > 1) {
            let firstArr  = this.storage[0];
            let secondArr = this.storage[1];
            for (let i = 0; i < firstArr.length; i++) {
                this.indSaver.a1 = firstArr[i];
                this.indSaver.a2 = firstArr[i+1];



                for (let j = 0; j < secondArr.length; j++) {
                    this.indSaver.b1 = secondArr[j];
                    this.indSaver.b2 = secondArr[j+1];

                    if (this.indSaver.a1 === this.indSaver.b2 && this.indSaver.a2 === this.indSaver.b1)  {
                        return this.indSaver;
                    }


                }

            }


        }
        else  {
            return "Nothing";
        }
    }

    animate() {

        let firstColl = document.getElementById(this.indSaver.a2);
        let secondColl = document.getElementById(this.indSaver.a1);


        for(let i = 0; i < this.arr.length; i++) {

            firstColl.style.left = i + 28 + 'px';
            secondColl.style.left = i - 28 + 'px';


        }
    }



}

let inputValue = document.getElementById('input').value;

let sortAndDraw = new SortAndDraw(inputValue);


let inputShow = document.getElementById('input');
inputShow.addEventListener('change', () => sortAndDraw.drawArray());


let increase = document.getElementById('inc');
increase.addEventListener('click',() => sortAndDraw.animate(sortAndDraw.changeNums(sortAndDraw.increaseSort())));



let decrease = document.getElementById('dec');
decrease.addEventListener('click', () => sortAndDraw.animate(sortAndDraw.changeNums(sortAndDraw.decreaseSort())));


