const ApiRequest = require("../ApiRequest");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    getbyclassgroup(classId, group) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("social/users/getbyclassgroup",this.options,{class:classId,group})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }

    getbysocialid(soctype, id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("social/users/getbysocialid",this.options,{soctype,id})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Users;