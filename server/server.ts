

import * as express from "express";
import {Application, Response} from "express";
import {initRestApi} from "./api/api";
import {apiErrorHandler} from "./api/apiErrorHandler";

const bodyParser:any = require("body-parser");
import * as JWT from "jsonwebtoken";

const app: Application = express();

app.use(bodyParser.json());



app.use(function(req:any, res:Response , next:Function) {
  console.log(req.path);
  if (req.path === '/api/login') {

    next();
    return;
  }
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {


    JWT.verify(token,'my secrete 2', function(err:any, decoded:any) {
      console.log(err,decoded);
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});
initRestApi(app);
app.use(apiErrorHandler);


app.listen(8090, () => {
    console.log("Server is now running on port 8090 ...");
});








