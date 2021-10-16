const DateTime = require("luxon").DateTime;

class DnevnikDate {

    static isISODate(s) {
        return DateTime.fromISO(s).isValid;
    }

    _date = DateTime.prototype;

    /**
     *
     * @param s is not set: current time;
     * is dnevnikDateTypeOne: Moscow time;
     * is timestamp: UTC time;
     * is ISO: UTC or provided;
     * @param zone
     */
    constructor(s, zone = undefined) {
        if(s === undefined || s == null) {
            if(this._date === undefined) {
                this._date = DateTime.utc();
            } else {
                require("luxon").Settings.defaultZone = zone;
                this._date = DateTime.now();
            }
        } else if(/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(s)) {
            this._date = DateTime.fromFormat(s, "dd.MM.y",{zone:"Europe/Moscow"}).toUTC();
        } else if(/^\d+$/.test(s)) {
            this._date = DateTime.fromSeconds(s,{zone:(zone===undefined?"utc":zone)});
        } else {
            this._date = DateTime.fromISO(s,{zone:(zone===undefined?"utc":zone)}).toUTC();
        }
    }


    getDnevnikTypeOne() {
        return this._date.setZone("Europe/Moscow").toFormat("dd.LL.y");
    }

    /**
     * In past - old
     * @returns {string} Returns date in MSK
     */
    getDnevnikTypeTwo() {
        return this._date.setZone("Europe/Moscow").toFormat("y-LL-dd");
    }

    getTime() {
        return this._date.setZone("Europe/Moscow").toFormat("H:mm");
    }

    getISO() {
        return this._date.toISO();
    }

    getDiffFromNowInMinutes() {
        return this._date.diffNow("minutes").minutes;
    }
}

module.exports = DnevnikDate;