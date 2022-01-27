const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");
const DnevnikDate = require("../DnevnikDate");

class Status {

    options;

    constructor(options) {
        this.options = options;
    }

    getDnevnikStatus(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("status/dnevnik", this.options, {id})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }
}

module.exports = Status;