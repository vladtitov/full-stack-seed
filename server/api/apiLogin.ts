import {Request, Response} from "express";
import * as _ from "lodash";
const uuidV4 = require('uuid/v4');
import {UserModel} from '../model/model';
import {onError, onSuccess} from './com';
import * as JWT from "jsonwebtoken";
import * as crypto from 'crypto';

const EXPIRATION_TIME:number = 180;
const MY_SECRET:string = 'my secrete 2';
/**
 * Created by Vlad on 3/29/2017.
 */

export function apiLogin(req: Request, respond: Response): void {
 // let  email:string = 'uplight.ca@gmail.com' , password:string = '$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem';
 // console.log(req.body)
  let params = _.pick(req.body, 'username', 'password', 'deviceId');

  if (!params.username || !params.password || !params.deviceId) {
    respond.status(400).send({error: 'username, password, and deviceId  are required parameters'});
    return
  }


  let password =  crypto.createHash('md5').update(params.password).digest("hex");

 // console.log(password);

  let user = UserModel.findOne({where:{ email:params.username}})
    .then(_.partial(checkUser, password, respond))
    .then(_.partial(generateToken, respond))
    //.then(res=>})
    .then(_.partial(onSuccess, respond))
    .catch(_.partial(onError, respond, "Login Failed"));
}

export function checkUser(password:string, respond:Response, user:any){

  if (_.isNull(user)){
    respond.status(404).send({error: 'User does not exist'});
    return null
  }

  // console.log(user.password,password);

  if(_.isMatch(user, {password:password}))  return user;
  respond.status(403).send({err:'password not match'});
  return null;
}

export function generateToken(respond:Response, user:any):string{
  if(!user) return '';
  let token:any ={}
  token.userId = user.id;
  token.id = uuidV4();
  token.iat =  Math.floor(new Date().getTime()/1000);
  token.exp = token.iat + EXPIRATION_TIME;
  let t = JWT.sign(token, MY_SECRET);
 // respond.header('x-access-token', t);
  respond.cookie('token', t, { maxAge: 86400 });
  return  t;
}

/*
export function readToken(token:string ):any{
  return JWT.verify(token, MY_SECRET,function (err, decoded) {
    console.log(err);
  });
}
*/

export function verifyLogin(req:any, res:Response, next:Function):void{
  let token = req.body.token || req.query.token || req.headers.authorization?req.headers.authorization.replace('Bearer ',''):'';//req.headers['x-access-token'];
 // console.log('token '+ token);
  if (token) {
    JWT.verify(token, MY_SECRET, function(err:any, decoded:any) {
      console.log(new Date().toLocaleString());
     console.log(err, decoded);
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {

        req.decoded = decoded;

        next();
      }
    });

  } else {
    res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
}


