function debugProp(obj, prop) {
	obj[`_${prop}`] = obj[prop]
	Object.defineProperty(obj, prop, {
		set: function(newProp) {debugger;this[`_${prop}`] = newProp},
		get: function() {return this[`_${prop}`]}
	})
}

module.exports = debugProp