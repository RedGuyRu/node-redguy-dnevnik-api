class DnevnikApi {

    options = {};

    constructor(token,options = {}) {
        options.token = token;
        this.options = options;
    }

    Social() {
        return new (require('./social'))(this.options);
    }

    Messages() {
        return new (require('./messages'))(this.options);
    }

    Links() {
        return new (require('./links'))(this.options);
    }

    Users() {
        return new (require('./users'))(this.options);
    }

    Marks() {
        return new (require('./marks'))(this.options);
    }
}

module.exports = DnevnikApi;