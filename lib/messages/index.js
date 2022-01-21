const ApiRequest = require("../ApiRequest");
const ApiError = require("../ApiError");
const Message = require("./Message");

class Messages {

    options;

    constructor(options) {
        this.options = options;
    }

    get(social) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("messages/get",this.options,{social})
                .then((result) => {
                    resolve(new Message(result.response));
                }).catch((error) => {
                if(error instanceof ApiError) {
                    if(error.code === 19) {resolve(null); return;}
                }
                    reject(error);
                });
        });
    }

    delivered(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("messages/delivered",this.options,{id}).then((result) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

module.exports = Messages;