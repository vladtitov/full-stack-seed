

import * as express from "express";
import {Application, Response} from "express";
import {initRestApi} from "./api/api";
import {apiErrorHandler} from "./api/apiErrorHandler";

const bodyParser:any = require("body-parser");
//import * as JWT from "jsonwebtoken";
import {apiLogin, verifyLogin} from './api/apiLogin';
import {onSuccess} from "./api/com";
import {initChangelly} from './api/changelly-api';
import {initShapeSift} from './api/shapeshift-api';

const app: Application = express();
const cors = require('cors');
app.use(bodyParser.json());

//app.use('/node_modules',express.static('./client/node_modules'));
app.use(cors({credentials:true}));

/*
app.use('/api',function(req:any, res:Response , next:Function){
 // console.log(req.path);

  let method = req.method && req.method.toUpperCase && req.method.toUpperCase();
  if (req.path === '/login') apiLogin(req, res);
  else if(req.path === '/test') onSuccess(res,{message:"Test from server"});
  else verifyLogin(req,res,next);
});
*/


app.use('/',express.static('./dist'));
initRestApi(app);
initChangelly(app);
initShapeSift(app);

app.use(apiErrorHandler);

const port:number = 50488;
app.listen(port, () => {
    console.log("Server is now running on port " + port);
});








