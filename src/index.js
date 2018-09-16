// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    let obj = {propertyName};
    return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {  
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        get: function(){ 
            return Object.prototype._value; 
        },
        set: function(value){
            Object.prototype._value = value
        }
    })
    return propertyName;
};
const createProtoMagicObject = () => {
    var itsSomeKindOfMagic = new Function();
    Object.defineProperty(itsSomeKindOfMagic, '__proto__', { value: null });
    itsSomeKindOfMagic.prototype = itsSomeKindOfMagic.__proto__;
    return itsSomeKindOfMagic;
};

const incrementor = () => {
    incrementor.counter++;
    incrementor.valueOf = function () {
        return incrementor.counter;
    }
    return incrementor;    
};
incrementor.counter = 0;


var counter = 0;
const asyncIncrementor = () => {  
    return new Promise((resolve) => {
        counter++;
        return resolve(counter);
    });
};

const createIncrementer = () => {
    return{
        count: 1,
        next() {
            return { value: this.count++}
        },
        [Symbol.iterator](){
            return{
                next: () =>{
                    return this.next()
                }
            }
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (parampampam) => {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(parampampam)
        }, 1001)
    })
};

const getDeepPropertiesCount = (objecto) => {
    var properties = Object.getOwnPropertyNames(objecto);
    var count = properties.length;
    properties.forEach(property => {
        if (Object.getOwnPropertyNames(objecto[property]).length > 0){
            count += getDeepPropertiesCount(objecto[property]);
        }
    })
    return count;
};
const createSerializedObject = () => {
    return null;
};
//const toBuffer = () => {};
const sortByProto = (obj) => {
    return obj.map((object, i) => {
        var count = 0
        while (object = object.__proto__){
             count++
        }
        return [count, obj[i]]
    }).sort((l, r) => l[0] - r[0]).map(([object, i]) => i)
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;



