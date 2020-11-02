const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Queue {

    options;

    constructor(options) {
        this.options = options;
    }

    get(socialNetwork) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("social/queue/get",this.options,{social:socialNetwork})
                .catch((error) => {
                    if(error instanceof ApiError) {
                        if(error.code === 19) resolve(null); return;
                    }
                    reject(error);
                }).then((result) => {
                resolve(JSON.parse(result.response));
            });
        });
    }
}

module.exports = Queue;