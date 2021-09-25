class ApiClient {

    options = {};

    constructor(token, options = {}) {
        options.token = token;
        this.options = options;
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

    Homeworks() {
        return new (require('./homeworks'))(this.options);
    }
}

module.exports = ApiClient;