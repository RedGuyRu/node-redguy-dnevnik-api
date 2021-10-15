const ApiError = require("../ApiError");
const ApiRequest = require('../ApiRequest');

class Links {

    options;

    constructor(options) {
        this.options = options;
    }

    getDayLinks(id, date) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("links/day",this.options,{id,date:date.getISO()})
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

module.exports = Links;