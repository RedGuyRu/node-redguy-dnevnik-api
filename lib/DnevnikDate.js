require("luxon").Settings.defaultZone = "utc";
const DateTime = require("luxon").DateTime;

class DnevnikDate {

    _date = DateTime.prototype;

    /**
     *
     * @param s is not set: current time;
     * is dnevnikDateTypeOne: Moscow time;
     * is timestamp: UTC time;
     * is ISO: UTC or provided;
     */
    constructor(s) {
        if(s === undefined || s == null) {
            this._date = DateTime.now();
        } else if(/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(s)) {
            this._date = DateTime.fromFormat(s, "dd.MM.y",{zone:"Europe/Moscow"}).setZone("utc");
        } else if(/^\d+$/.test(s)) {
            this._date = DateTime.fromSeconds(s);
        } else {
            this._date = DateTime.fromISO(s).setZone("utc");
        }
    }


    getDnevnikTypeOne() {
        return this._date.setZone("Europe/Moscow").toFormat("dd.LL.y");
    }

    /**
     * In past - old
     * @returns {string}
     */
    getDnevnikTypeTwo() {
        return this._date.setZone("Europe/Moscow").toFormat("y-LL-dd");
    }

    getISO() {
        return this._date.toISO();
    }
}

module.exports = DnevnikDate;