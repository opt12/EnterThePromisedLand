//example taken from
//http://dapperdeveloper.com/2015/06/09/
//  clean-promise-chains-using-a-pipeline/

module.exports = function(tasks) {
	this.go = function() {
		if (!tasks || tasks.length === 0)
			return Promise.resolve();

		var promise = tasks[0].apply(this, arguments);
        if (!promise.then)
            promise = Promise.resolve(promise);
		for (var i = 1; i < tasks.length; i++)
			promise = promise.then(tasks[i]);
		return promise;
	}
};