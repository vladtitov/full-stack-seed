/**
 * Created by Vlad on 7/1/2017.
 */
var Changelly = require('../libs/changelly');
var apikey = '23c7a086c98b4f07963208522a42cda0';
var secret = 'c1fe7209b388e0792883a1b3f0c3a6a27d9bb0476f39ca6d8a4329f97084e7dc';
var changelly = new Changelly('23c7a086c98b4f07963208522a42cda0', 'c1fe7209b388e0792883a1b3f0c3a6a27d9bb0476f39ca6d8a4329f97084e7dc');
changelly.getCurrencies(function (err, data) {
    if (err) {
        console.log('Error!', err);
    }
    else {
        console.log('getCurrencies', data.result.length);
    }
});
//# sourceMappingURL=changelly-rpc.js.map