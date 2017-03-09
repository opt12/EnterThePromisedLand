//code for sequence() taken from
//Parker, Daniel, JavaScript with promises, p. 33

/**
 * executes the callback with the arguments given in the paramArray; 
 * The callback function shall return a Promise.
 * The callback functions with arguments are executed serially.
 * @param paramArray: array of data to be passed into the callback function as parameter
 * @param callback: The function to be executed in series. Shall return a promise.
 * @returns {*}: an empty resolved promise in case of success; a rejected promise in case of error;
 */
function sequence(paramArray, callback) {
    var resultArray = [];

    function chain(ops, index) {
        if (index == ops.length) return Promise.resolve(resultArray);
        return Promise.resolve(callback(ops[index])).then(function (result) {
            resultArray.push(result);
            return chain(ops, index + 1);
        })
    }

    return chain(paramArray, 0);
}

module.exports = sequence;