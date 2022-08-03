function flip(string){
    let result = [...string].reverse().join('');
    return result;
}
function omitBy(object,condition){
    let result = {};
    for(const property in object){
        if(!condition(object[property])){
            result[property] = object[property];
        }
    }
    return result;
}

function merge(object1,object2){
    return {...object1,...object2}
}

function minN(array,n = 1){
    let result = array.sort((a,b)=> a-b);
    return result.slice(0,n)
}

function reduce_Which(array,condition = (a,b) => a - b){
    let result = array.sort(condition)
    return result[0];    
}
function all(array,condition = x => true){
    let result = array.filter(x => !condition(x)); 
    return result.length === 0;
}
function isMultiple(a,condition){
    for (let j = 0; j < array.length; j++) {
        const element = array[index];
        
    }
}
function filter_Non_UniqueBy(array, condition){
    let result = [];
    for(let i = 0;i < array.length;i++){
        let multiple = false;
        for (let j = 0; j < array.length; j++) {
            if (condition(array[i],array[j]) && !(i === j)){
                multiple = true;
            }
        }
        if (!multiple){
            result.push(array[i])
        }
    }
    return result;
}

console.log(filter_Non_UniqueBy([{ id: 0, value: 'a' },{ id: 1, value: 'b' },{ id: 2, value: 'c' },{ id: 1, value: 'd' },{ id: 0, value: 'e' }],(a, b) => a.id == b.id));
