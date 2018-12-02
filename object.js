// 1) Object.create
Object.prototype.myCreate = function myCreate(obj, propertiesObject) {
    function F() {}
    F.prototype = obj;
    const f = new F();

    return Object.defineProperties(f, propertiesObject);
};

// 2) Object.keys
Object.prototype.myKeys = function myKeys(obj) {
    let arr = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }

    return arr;
};

// 17) Object.freeze
Object.prototype.myFreeze = function myFreeze(obj) {
    Object.preventExtensions(obj);

    for (let key in obj) {
        Object.defineProperty(obj, key, {
            writable: false,
            configurable: false,
        });
    }
};