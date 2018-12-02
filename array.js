// 3) Array.pop - Удаляет последний элемент из массива и возвращает его:
Array.prototype.myPop = function myPop() {
    let element;
    for (let i = 0; i < this.length; i++)
        if (i === this.length - 1) element = this[i];
    this.length -= 1;

    return element;
};

// 4) Array.push - Добавляет элемент в конец массива
Array.prototype.myPush = function myPush() {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }

    return this.length;
};

// 5) Array.shift - Удаляет из массива первый элемент и возвращает его
Array.prototype.myShift = function myShift() {
    let deletedElement = this[0];

    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    this.length -= 1;

    return deletedElement;
};

// 6) Array.unshift - Добавляет элемент в начало массива
Array.prototype.myUnShift = function myUnShift() {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + arguments.length] = this[i];
    }

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }

    return this.length;
};

// 7) Array.map
Array.prototype.myMap = function myMap(callback) {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        array[i] = callback(this[i], i, this);
    }

    return array;
};

// 8) Array.forEach
Array.prototype.myForEach = function myForEach(callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i], i, this);
    }
};

// 9) Array.filter
Array.prototype.myFilter = function myFilter(callback) {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            array[array.length] = this[i];
        }
    }

    return array;
};

// 10) Array.reverse
Array.prototype.myReverse = function myReverse() {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        array[i] = this[i];
    }

    this.length = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        this[this.length] = array[i];
    }

    return this;
};

// 11) Array.join
Array.prototype.myJoin = function myJoin(param) {
    let str = '';

    if (param) {
        str += this[0];

        for (let i = 1; i < this.length - 1; i++) {
            str += this[i] + param;
        }
    }

    else {
        str += this[0];

        for (let i = 1; i < this.length - 1; i++) {
            str += this[i] + ',';
        }
    }

    if (param === '') {
        str += this[0];

        for (let i = 1; i < this.length - 1; i++) {
            str += this[i] + param;
        }
    }

    return str;
};

// 12) Array.reduce
Array.prototype.myReduce = function myReduce(callback, prevItem) {
    let sum = prevItem;
    let i = 0;

    if (sum === undefined) {
        sum = this[0];
        i++;
    }

    for (i; i < this.length; i++) {
        sum = callback(sum, this[i], i, this);
    }

    return sum;
};

// 13) Array.sort
Array.prototype.mySort = function mySort(userCallback) {
    let callback = (userCallback) ? userCallback : basicCallback;
    let changed = false;

    function basicCallback(a, b) {
        return (a > b) ? 1 : -1;
    }

    do {
        for (let i = 0; i < this.length - 1; i++) {
            let result = callback(this[i], this[i + 1]);

            if (result > 0) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;

                changed = true;
                break;
            } else {
                changed = false;
            }
        }
    } while (changed);
};

// 18) Array.some
Array.prototype.mySome = function mySome(callback) {
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return true;
    }

    return false;
};

// 19) Array.every
Array.prototype.myEvery = function myEvery(callback) {
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }

    for (let i = 0; i < this.length; i++) {
        if (!(callback(this[i], i, this))) return false;
    }

    return true;
};

// ----- //
let arr = [-1,0,1,2,3,4,5];
let positive = value => value >= 0;

console.log(arr.length);
console.log('myPop', arr.myPop());
console.log(arr);
console.log('myPush', arr.myPush('myPush'));
console.log(arr);
console.log('myShift', arr.myShift());
console.log(arr);
console.log('myUnShift', arr.myUnShift('myUnShift'));
console.log(arr);

console.log('mySome', arr.mySome(positive));
console.log('myEvery', arr.myEvery(positive));
