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

    Schedule() {
        return new (require('./schedule'))(this.options);
    }

    Menu() {
        return new (require('./menu'))(this.options);
    }

    Answers() {
        return new (require('./answers'))(this.options);
    }
}

module.exports = ApiClient;