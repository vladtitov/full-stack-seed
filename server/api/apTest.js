"use strict";
// import * as _ from "lodash";
// import {onError} from "./onError";
var com_1 = require("./com");
function apiTest(req, res) { com_1.onSuccess(res, { message: "Test from server" }); }
exports.apiTest = apiTest;
//# sourceMappingURL=apTest.js.map