class Store {

    options;

    constructor(options) {
        this.options = options;
    }

    Queue() {
        return new (require('./queue'))(this.options);
    }
}

module.exports = Store;