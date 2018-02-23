// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
   
    Object.defineProperty(Object.prototype, propertyName, {
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
    
};

const incrementor = () => {
        
    incrementor.counter++;
    incrementor.valueOf = function () {
        return incrementor.counter;
    }
    return incrementor;    
};
incrementor.counter = 0;

const asyncIncrementor = () => {
    var counter = 1;
    asyncIncrementor.valueOf = function() {
        return asyncIncrementor.counter++;
    }
    
    return function() {
        return currentCount++;
    };
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
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = () => {};

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



