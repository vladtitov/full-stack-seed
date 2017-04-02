

import * as express from "express";
import {Application, Response} from "express";
import {initRestApi} from "./api/api";
import {apiErrorHandler} from "./api/apiErrorHandler";

const bodyParser:any = require("body-parser");
import * as JWT from "jsonwebtoken";
import {apiLogin, verifyLogin} from './api/apiLogin';
import {onSuccess} from "./api/com";

const app: Application = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({credentials:true}));
app.use(function(req:any, res:Response , next:Function){
  let method = req.method && req.method.toUpperCase && req.method.toUpperCase();
  if (req.path === '/api/login') apiLogin(req, res);
  else if(req.path === '/api/test') onSuccess(res,{message:"Test from server"});
  else verifyLogin(req,res,next);
});
initRestApi(app);
app.use(apiErrorHandler);

const port:number = 8090;
app.listen(port, () => {
    console.log("Server is now running on port " + port);
});








