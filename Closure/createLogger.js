function createLogger(namespace) {

    function logger(message) {
        console.log(`${namespace}: ${message}`);
    }
    return logger;
}

const logger = createLogger('Info');

logger('Hello');

const logger2 = createLogger('Error');

logger2('Error 2')