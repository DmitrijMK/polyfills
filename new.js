// new  =========================
function myNew(func) {
    const that = Object.create(func.prototype);
    func.apply(that);
    return that;
}

function F() {
    this.a = 10;
}

F.prototype.foo = function foo() {
    return this.a;
};

// ---------------
const a = myNew(F);
console.log(a); // { a: 10, __proto__: { foo, constructor } }
console.log(a.foo()); // 10