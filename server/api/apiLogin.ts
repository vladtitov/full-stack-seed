import {Request, Response} from "express";
import * as _ from "lodash";
const uuidV4 = require('uuid/v4');
import {UserModel} from '../model/model';
import {onError, onSuccess} from './com';
import * as JWT from "jsonwebtoken";

const EXPIRATION_TIME:number = 180;
/**
 * Created by Vlad on 3/29/2017.
 */

export function apiLogin(req: Request, respond: Response): void {
 // let  email:string = 'uplight.ca@gmail.com' , password:string = '$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem';
  console.log(req.body)
  var params = _.pick(req.body, 'username', 'password', 'deviceId');


  if (!params.username || !params.password || !params.deviceId) {
    respond.status(400).send({error: 'username, password, and deviceId  are required parameters'});
    return
  }

  var user = UserModel.findOne({where:{ email:params.username}})
    .then(userR => {
      if (_.isNull(userR)){
        respond.status(404).send({error: 'User does not exist'});
        return
      }
     // console.log(userR);
      if(_.isMatch(userR,{password:params.password}))  return userR
      respond.status(200).send(userR);
      return;
     // userR.comparePassword(params.password);
    })
    .then((item:any) => {

      let userKey = uuidV4();
      let issuedAt = new Date().getTime();
      let expiresAt = issuedAt + (EXPIRATION_TIME * 1000);

      let token = JWT.sign({email:item.email,did:params.deviceId,iat:issuedAt,eat:expiresAt},'my secrete 2');

      return {id:item.id, at:item.createdAt, token:token};

    }).then(res=>{
      console.log(res);
      return res
  })
    .then(_.partial(onSuccess, respond))
    .catch(_.partial(onError, respond, "Login Failed"));

}



export function generateToken(user:{id:number, email:string}):AccessToken{

  return {id:'jjjjjj',  userId:user.id, ttl:34455, created:"00000" }
}



export interface AccessToken{
  id:string;
  ttl:number;
  created:string;
  userId: number;
}