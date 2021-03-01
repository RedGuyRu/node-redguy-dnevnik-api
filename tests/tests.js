const dnevnikApi = require("../lib");
let api = new dnevnikApi(process.env.TOKEN);
api.Users().getSettingsToken(2918540).then((token) => {
    console.log(token);
});