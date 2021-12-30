const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    resolveUserIdBySocialId(social,id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/social/resolve/id",this.options,{social,id})
                .then((result) => {
                resolve(result.response.id);
            }).catch((error) => {
                if(error instanceof ApiError) {
                    if(error.code === 19) {resolve(undefined); return;}
                }
                reject(error);
            });
        });
    }

    generateEditSession(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/edit/generate",this.options,{id})
                .then((result) => {
                    resolve(result.response.session);
                }).catch((error) => {
                reject(error);
            });
        });
    }

    getUserInfo(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/info",this.options,{id})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                reject(error);
            });
        });
    }

    getBalance(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/balance",this.options,{id})
                .then((result) => {
                    resolve(result.response.balance);
                }).catch((error) => {
                reject(error);
            });
        });
    }
}

module.exports = Users;