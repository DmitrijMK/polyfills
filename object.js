// Object.assign - используется для копирования значений всех собственных перечисляемых свойств
// из одного или более исходных объектов в целевой объект.
Object.prototype.myAssign = function myAssign(target) {
    if (!target) throw new TypeError('Can`t convert');
    const result = Object(target);
    const sources = [].slice.call(arguments, 1);

    for (const nextSource of sources) {
        if (!nextSource) continue;
        for (const j of Object.keys(nextSource)) {
            const desc = Object.getOwnPropertyDescriptor(nextSource, j);
            if (desc.enumerable) result[j] = nextSource[j];
        }
    }

    return result;
};

// Object.create - создаёт новый объект с указанными объектом прототипа и свойствами.
Object.prototype.myCreate = function myCreate(obj, propertiesObject) {
    function F() {
    }

    F.prototype = obj;
    const f = new F();

    return Object.defineProperties(f, propertiesObject);
};

// Object.keys - возвращает массив из собственных перечисляемых свойств переданного объекта,
// в том же порядке, в котором они бы обходились циклом for...in
// Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.
Object.prototype.myKeys = function myKeys(obj) {
    let arr = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }

    return arr;
};

// Object.freeze - предотвращает добавление новых свойств к объекту,
// удаление и изменение существующих свойств, значения их атрибутов перечисляемости, настраиваемости и записываемости.
// Возвращает замороженный объект.
Object.prototype.myFreeze = function myFreeze(obj) {
    Object.preventExtensions(obj);

    for (let key in obj) {
        Object.defineProperty(obj, key, {
            writable: false,
            configurable: false,
        });
    }
};
