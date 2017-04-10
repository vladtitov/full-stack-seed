"use strict";
var fs = require('fs');
function apiGetMenu(req, respond) {
    fs.readFile('server/pub/menu.json', function (err, data) {
        if (err)
            respond.send(err);
        else
            respond.send(data);
    });
}
exports.apiGetMenu = apiGetMenu;
//# sourceMappingURL=apiGetMenu.js.map