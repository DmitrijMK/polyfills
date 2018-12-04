// Function.bind
Function.prototype.myBind = function myBind(context) {
    let func = this;
    let previousArgs = [].slice.call(arguments, 1);

    return function(){
        let currentArgs = [].slice.call(arguments);
        return func.apply(context, previousArgs.concat(currentArgs));
    };
};

// Function.call
Function.prototype.myCall = function myCall(context) {
    let name = "unique" + Math.random();
    let args = [];
    context[name] = this;

    for (let i = 1; i < arguments.length; i++) {
        args[i - 1] = "arguments[" + i + "]";
    }

    let construct = new Function('context, name, arguments', 'return context[name](' + args + ');');
    let result = construct(context, name, arguments);
    delete context[name];

    return result;
};

Object.prototype.es6Call = function myCall(obj, ...value) {
    return this.apply(obj, value);
};

// Function.apply
Function.prototype.myApply = function myApply(context, argsArray) {
    let name = "unique" + Math.random();
    let args = [];
    context[name] = this;

    for (let i = 0; i < argsArray.length; i++) {
        args[i] = "argsArray[" + i + "]";
    }

    let construct = new Function('context, name, argsArray', 'return context[name](' + args + ');');
    let result = construct(context, name, argsArray);
    delete context[name];

    return result;
};

Object.prototype.es6Apply = function myApply(obj, value) {
    return this.call(obj, ...value);
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