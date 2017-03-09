module.exports = function timeoutPromise(promise, delay, defaultVal) {
    var promiseTimer = function (delay, defaultValue) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (defaultValue) resolve(defaultValue);
                else reject(new Error("Promise timed out"))
            }, delay)
        })
    }

    return Promise.race([promise, promiseTimer(delay, defaultVal)]);
};