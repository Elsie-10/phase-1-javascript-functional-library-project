function myEach(collection, callback){
    //checks if my collection is an array 
    if (Array.isArray(collection)) {
        // Iterate over the array and call the callback with each element
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        // Iterate over the object and call the callback with each value
        for (let key in collection) {
          if (collection.hasOwnProperty(key)) {
            callback(collection[key]);
          }
        }
      }
    return collection;
      // Return the original collection
}

function myMap(collection,callback){
    if(Array.isArray(collection)){
        return collection.map(callback)
    }
    if(typeof collection ==='object'&& collection !== null){
        return Object.values(collection).map(callback)
    }
    return[];
}

function myReduce(collection,callback,acc){
    // Check if the collection is an array or an object
    if (Array.isArray(collection)) {
        let startIndex = 0;
        
        // If no accumulator is provided, set the accumulator to the first element
        if (acc === undefined) {
            acc = collection[0];
            startIndex = 1; // Start from the second element
        }
        
        // Loop through the array
        for (let i = startIndex; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection); // Update the accumulator
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If the collection is an object, we use Object.values() to get an array of values
        let startIndex = 0;
        
        // If no accumulator is provided, set the accumulator to the first element
        if (acc === undefined) {
            acc = Object.values(collection)[0];
            startIndex = 1; // Start from the second value
        }
        
        // Loop through the object values
        const values = Object.values(collection);
        for (let i = startIndex; i < values.length; i++) {
            acc = callback(acc, values[i], collection); // Update the accumulator
        }
    }

    return acc; // Return the final accumulated value

}

function myFind(collection, predicate) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i]; // Return the first element that passes the predicate
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // If the collection is an object, loop through its values
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key])) {
                return collection[key]; // Return the first value that passes the predicate
            }
        }
    }
    return undefined; // Return undefined if no element passes the predicate
}

function myFilter(collection, predicate) {
    const result = [];
    
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key])) {
                result.push(collection[key]);
            }
        }
    }
    
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length;
    }
    return 0;
}

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    }
    return array.slice(array.length - n);
}
function myKeys(object) {
    const keys = [];
    
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    
    return keys;
  }

  function myValues(object) {
    const values = [];
    
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    
    return values;
  }
  
