const axios = require("axios");
const ApiError = require("./ApiError");

class ApiRequest {
    static mainGet(path, options, params = {}) {
        params.token = options.token;
        return new Promise((resolve, reject) => {
            axios.get("https://dapi.redguy.ru/"+path+"/",
                {
                    params,validateStatus:(status => {return status < 300 || status === 523;})
                }).catch((error) => {
                reject(error);
            }).then((response) => {
                if (response === undefined) {
                    reject(new Error("Bad request: https://dapi.redguy.ru/" + path + "/"));
                    return;
                }
                let result = response.data;
                if (result.code !== 1) {
                    reject(new ApiError(result.code, result.comment, response));
                } else {
                    resolve(result);
                }
            });
        });
    }

    static mainPost(path, options, body, params = {}) {
        params.token = options.token;
        return new Promise((resolve, reject) => {
            axios.post("https://dapi.redguy.ru/" + path + "/",
                body,
                {
                    params
                }).catch((error) => {
                reject(error);
            }).then((response) => {
                let result = response.data;
                if (result.code !== 1) {
                    reject(new ApiError(result.code, result.comment, response));
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = ApiRequest;