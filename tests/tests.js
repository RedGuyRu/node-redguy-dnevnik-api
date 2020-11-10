const dnevnikApi = require("../lib");
let api = new dnevnikApi(process.env.TOKEN);
api.Social().Users().getbyclassgroup(1,1).then((data) => {
    console.log(data);
})