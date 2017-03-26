"use strict";
function onError(res, message, err) {
    console.error("Promise chain error ", message, err);
    res.status(500).send();
}
exports.onError = onError;
//# sourceMappingURL=onError.js.map