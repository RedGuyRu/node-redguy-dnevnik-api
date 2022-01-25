class TextUtil {
    static degrees = {1:"\u00b9",2:"\u00B2",3:"\u00B3",4:"\u2074",5:"\u2075"}

    static degree(num) {
        return this.degrees[num];
    }
}

module.exports = TextUtil;