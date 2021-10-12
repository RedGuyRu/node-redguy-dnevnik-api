const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Homeworks {
    options;

    constructor(options) {
        this.options = options;
    }

    getDayHomework(id, date) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("homeworks/day",this.options,{id,date:date.getISO()})
                .then((result) => {
                    resolve(result.response);
                })
                .catch((error) => {
                    if(error instanceof ApiError) {
                        if(error.code === 19) {resolve(null); return;}
                    }
                    reject(error);
                });
        });
    }
}

module.exports = Homeworks;