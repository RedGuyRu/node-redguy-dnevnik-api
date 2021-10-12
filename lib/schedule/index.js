const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Schedule {
    options;

    constructor(options) {
        this.options = options;
    }

    getDaySchedule(id, date) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("schedule/day",this.options,{id,date:date.getISO()})
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

module.exports = Schedule;