// 14) Function.bind
Function.prototype.myBind = function myBind(context) {
    var self = this;
    var arg1 = [].slice.call(arguments, 1);

    return function () {
        var arg2 = [].slice.call(arguments);
        return self.apply(context, arg1.concat(arg2));
    }
};

// 15) Function.call
Function.prototype.myCall = function myCall(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
};

// 16) Function.apply
Function.prototype.myApply = function myApply(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
};

// ------------------ //

const obj1 = {
    a: 20,
    foo(...numbers) {
        return this.a + numbers.reduce((prev, curr) => prev + curr);
    },
};

const obj2 = {
    a: 30,
};

console.log('myCall', obj1.foo.myCall(obj2, 5, 5, 20)); // 60
console.log('myCall', obj1.foo.myCall(obj2, 5, 5, 10, 20)); // 70

console.log('myApply', obj1.foo.myApply(obj2, [5, 5])); // 40
console.log('myApply', obj1.foo.myApply(obj2, [5, 5, 10])); // 50

const f1 = obj1.foo.myBind(obj2, 5, 5);
console.log('myBind', f1()); // 40
const f2 = obj1.foo.myBind(obj2, 5, 5, 10);
console.log('myBind', f2()); // 50