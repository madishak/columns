class Sort {
    constructor(array) {
        this.arr = array.slice(0);
        this.listOfIndexes = [];
        this.newArr = this.listOfIndexes.reverse();
        this.listOfIndexesNext = [];
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
        console.log(this.arr);
        return this.arr;
    }


    increaseSort() {

        // let flag = true;
        // while (flag) {
        //     flag = false;
        let t;
            for (let i = 0; i < this.arr.length-1; i++) {
                for (let j = 0; j < this.arr.length-1; j++) {
                    if (this.arr[j] > this.arr[j+1]) {
                        [this.arr[j], this.arr[j+1]] = [this.arr[j+1], this.arr[j]];
                        console.log(j,j+1);
                        this.listOfIndexes = [j, j+1, ...this.listOfIndexes];
                        this.listOfIndexesNext = this.listOfIndexes.reverse();
                        // flag = true;
                        //continue;
                        //return this.arr;
                        t = this.arr;
                    }
                }

            }
        // }
        t = this.arr;
        //     console.log(this.listOfIndexes);
        // console.log(this.listOfIndexes.reverse());
        // console.log(this.arr);
        return t;

    }

    change() {
        const listOfIndexes = this.listOfIndexes.reverse();
        console.log(this.listOfIndexesNext);
        for (let i = 0; i <this.listOfIndexesNext.length; i++) {
            for (let j = 0; j < this.arr.length; j++) {
                if (this.listOfIndexesNext.length !== 0) {
                    [this.arr[this.listOfIndexesNext[i]], this.arr[this.listOfIndexesNext[i+1]]] = [this.arr[this.listOfIndexesNext[i+1]], this.arr[this.listOfIndexesNext[i]]];
                    this.listOfIndexesNext.shift(this.listOfIndexesNext[0]);
                    this.listOfIndexesNext.shift(this.listOfIndexesNext[1]);
                    return this.arr;
                }
            }
        }
        // console.log(this.newArr);
        // for (let i = 0; i < this.arr.length; i++) {
        //     if (this.newArr.length !== 0) {
        //         [this.arr[this.newArr[1]], this.arr[this.newArr[0]]] = [this.arr[this.newArr[0]], this.arr[this.newArr[1]]];
        //         this.newArr.shift(this.newArr[0]);
        //         this.newArr.shift(this.newArr[1]);
        //
        //         return this.arr;
        //     }
        //
        // }
       // console.log(this.arr);
        return this.arr;
    }


}

export default Sort;