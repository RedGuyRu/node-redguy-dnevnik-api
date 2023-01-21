const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");
const DnevnikDate = require("../DnevnikDate");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    resolveUserIdBySocialId(social, id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/social/resolve/id", this.options, {social, id})
                .then((result) => {
                    resolve(result.response.id);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(undefined);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    generateEditSession(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/edit/generate", this.options, {id})
                .then((result) => {
                    resolve(result.response.session);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getUserInfo(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/info", this.options, {id})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getBalance(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/balance", this.options, {id})
                .then((result) => {
                    resolve(result.response.balance);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getVisits(id, date = new DnevnikDate()) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/visits", this.options, {id, date: date.getISO()})
                .then((result) => {
                    resolve(result.response.visits);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getProgress(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/progress", this.options, {id})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getAEGroups(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/groups", this.options, {id})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getLessons(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/lessons", this.options, {id})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getSubject(id, subject) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/subject", this.options, {id, subject})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getPeriods(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/periods", this.options, {id})
                .then((result) => {
                    resolve(result.response);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    getNotifications(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/notifications", this.options, {id})
                .then((result) => {
                    resolve(result.response.notifications);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    setNotifications(id, options) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("users/notifications", this.options, "", {id, notifications: options})
                .then((result) => {
                    resolve(result.response.notifications);
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }

    logout(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/logout", this.options, {id})
                .then((result) => {
                    resolve();
                }).catch((error) => {
                if (error instanceof ApiError) {
                    if (error.code === 19) {
                        resolve(null);
                        return;
                    }
                }
                reject(error);
            });
        });
    }
}

module.exports = Users;