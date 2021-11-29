const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Answers {
    options;

    constructor(options) {
        this.options = options;
    }

    getMeshAnswers(variant, type = "homework") {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("answers/mash",this.options,{variant,context_type:type})
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

    planMeshAnswers(user, variant, type = "homework") {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("answers/mash/plan",this.options,{id:user,variant,context_type:type})
                .then((result) => {
                    resolve(result.response.planned);
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

module.exports = Answers;