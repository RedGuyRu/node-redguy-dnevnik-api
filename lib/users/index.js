const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    getToken(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/gettoken",this.options,{id})
                .catch((error) => {
                    if(error instanceof ApiError) {
                        if(error.code === 19) resolve(null); return;
                    }
                    reject(error);
                }).then((result) => {
                resolve(result.response.token);
            });
        });
    }

    getSettingsToken(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/getsettingstoken",this.options, {id})
                .catch((error) => {
                    if(error instanceof ApiError) {
                        if(error.code === 19) resolve(null); return;
                    }
                    reject(error);
                }).then((result) => {
                    resolve(result.response.token);
            });
        });
    }
}

module.exports = Users;