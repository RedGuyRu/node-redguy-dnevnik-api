const dnevnikApi = require("../lib");
let api = new dnevnikApi(process.env.TOKEN);
api.Social().Users().getbysocialid('vk',195680093).then((id) => {
    console.log(id);
});