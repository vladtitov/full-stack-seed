"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var all_coins_service_1 = require("./all-coins.service");
describe('AllCoinsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [all_coins_service_1.AllCoinsService]
        });
    });
    it('should be created', testing_1.inject([all_coins_service_1.AllCoinsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=all-coins.service.spec.js.map