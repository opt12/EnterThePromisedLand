//Sample Async Wrapper utility to run Generators with async calls
//taken from Parker, Daniel, JavaScript with promises, p. 77

function asyncRunner(generator) {
    return function () {
        var iterator = generator.apply(this, arguments);

        function handle(result) {
            if (result.done) return Promise.resolve(result.value);
            
            return Promise.resolve(result.value)
                .then(function (res) {
                    return handle(iterator.next(res));
                }, function (err) {
                    return handle(iterator.throw(err));
                })
        }

        try {
            return handle(iterator.next());
        } catch (ex) {
            return Promise.reject(ex);
        }
    };
}

export {asyncRunner}