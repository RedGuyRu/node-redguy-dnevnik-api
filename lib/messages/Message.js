class Message {
    _id;
    _social;
    _text;
    _receiver;
    _state;

    constructor(data) {
        this._id = data.id;
        this._social = data.social;
        this._text = data.text;
        this._receiver = data.receiver;
        this._state = data.state;
    }

    get id() {
        return this._id;
    }

    get social() {
        return this._social;
    }

    get text() {
        return this._text;
    }

    get receiver() {
        return this._receiver;
    }

    get state() {
        return this._state;
    }
}

module.exports = Message;