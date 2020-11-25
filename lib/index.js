class DnevnikApi {

    options = {};

    constructor(token,options = {}) {
        options.token = token;

        if(options.v === undefined) {
            options.v = '1.0';
        }

        this.options = options;
    }

    Social() {
        return new (require('./social'))(this.options);
    }

    Event() {
        return new (require('./event'))(this.options);
    }

    Links() {
        return new (require('./links'))(this.options);
    }
}

module.exports = DnevnikApi;