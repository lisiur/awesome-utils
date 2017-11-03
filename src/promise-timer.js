const requiredArg = require('./required-arg')

function promiseTimer(firstCb = requiredArg('first callback is required'), lastCb = requiredArg('last callback is required'), maxTime) {
    firstCb()
    const timer = setTimeout(lastCb, maxTime)
    return function cancelTimer() {
        lastCb()
        clearTimeout(timer)
    }
}

module.exports = promiseTimer