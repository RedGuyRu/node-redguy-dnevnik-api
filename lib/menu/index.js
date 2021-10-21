const ApiError = require("../ApiError");
const ApiRequest = require('../ApiRequest');

class Menu {

    options;

    constructor(options) {
        this.options = options;
    }

    getDayMenu(id, date) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("menu/day",this.options,{id,date:date.getISO()})
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

module.exports = Menu;