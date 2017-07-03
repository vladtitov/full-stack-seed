"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var com_1 = require("./com");
var com_2 = require("./com");
//import {findAllPosts} from '../queries/findAllPosts';
var model_1 = require("../model/model");
function apiGetAllPosts(req, res) {
    // console.log(req.decoded);
    var userId = req.decoded.userId;
    console.log('userId  ' + userId);
    model_1.PostModel.findAll({
        //  order: ['seqNo']
        where: { userId: userId }
    })
        .then(function (res) {
        return res.map(function (_a) {
            var id = _a.id, description = _a.description;
            return { id: id, description: description };
        });
    })
        .then(_.partial(com_2.onSuccess, res))
        .catch(_.partial(com_1.onError, res, "Find All Posts Failed"));
    /*
      findAllPosts()
        .then(_.partial(onSuccess,res))
        .catch(_.partial(onError, res, "Find All Posts Failed"));
  */
}
exports.apiGetAllPosts = apiGetAllPosts;
//# sourceMappingURL=apiGetAllPosts.js.map