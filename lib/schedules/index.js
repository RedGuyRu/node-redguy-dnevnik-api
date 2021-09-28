const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Schedules {
    options;

    constructor(options) {
        this.options = options;
    }

    getDaySchedules(id, date) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("schedule/day",this.options,{id,date})
                .catch((error) => {
                    if(error instanceof ApiError) {
                        if(error.code === 19) resolve(null); return;
                    }
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Schedules;