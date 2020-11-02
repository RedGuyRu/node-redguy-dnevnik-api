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

    Store() {
        return new (require('./Store'))(this.options);
    }
}

module.exports = DnevnikApi;