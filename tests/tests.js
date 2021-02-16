const dnevnikApi = require("../lib");
let api = new dnevnikApi(process.env.TOKEN);
api.Users().getToken(2918540).then((token) => {
    console.log(token);
})