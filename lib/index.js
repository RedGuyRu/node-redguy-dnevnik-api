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
        return new (require('./Event'))(this.options);
    }
}

module.exports = DnevnikApi;