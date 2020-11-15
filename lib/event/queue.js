const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Queue {

    options;

    constructor(options) {
        this.options = options;
    }

    get(maxeventv) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/queue/get",this.options,{maxeventv}).then((result) => {
                resolve(result.response);
            }).catch((error) => {
                if(error instanceof ApiError) {
                    if(error.code === 19) resolve(null); return;
                }
                reject(error);
            });
        });
    }

    add(eventType,eventV,eventsV,author,ts,data) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/queue/add",this.options,{
                eventType,
                eventV,
                eventsV,
                author,
                ts,
                data: JSON.stringify(data)
            }).then((result) => {
                if(result.response.result === "ok") {
                    resolve();
                } else  {
                    reject();
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

module.exports = Queue;