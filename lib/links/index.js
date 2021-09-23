const ApiRequest = require('../ApiRequest');

class Links {

    options;

    constructor(options) {
        this.options = options;
    }

    /*get(startTs,stopTs,userSystem,userId) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("links/get",this.options,{startTs,stopTs,userSystem,userId})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }

    add(classId,group,ts,data) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("links/add",this.options,{class:classId,group,ts,data:JSON.stringify(data)})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }*/
}

module.exports = Links;