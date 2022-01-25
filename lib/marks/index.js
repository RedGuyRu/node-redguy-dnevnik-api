const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Marks {

    options;

    constructor(options) {
        this.options = options;
    }

    getTotalMarks(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("marks/needs",this.options,{id})
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

    getDayMarks(id, date) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("marks/day",this.options,{id,date:date.getISO()})
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

    getLessonMarks(id, lesson) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("marks/lesson",this.options,{id,lesson})
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

module.exports = Marks;