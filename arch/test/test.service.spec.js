"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var test_service_1 = require("./test.service");
describe('TestService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [test_service_1.TestService]
        });
    });
    it('should ...', testing_1.inject([test_service_1.TestService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=test.service.spec.js.map