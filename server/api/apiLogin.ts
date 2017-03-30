import {Request, Response} from "express";
import * as _ from "lodash";
import {UserModel} from '../model/model';
import {onError, onSuccess} from './com';
/**
 * Created by Vlad on 3/29/2017.
 */

export function apiLogin(req: Request, res: Response): void {
  let  email:string = 'uplight.ca@gmail.com' , password:string = '$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem';

  UserModel.findOne({
    where:{
      email:email,
      password:password
    }
  })
    .then((item:any) => {
        return {id:item.id, at:item.createdAt};
    }).then(res=>{
      console.log(res);
      return res
  })
    .then(_.partial(onSuccess,res))
    .catch(_.partial(onError, res, "Login Failed"));
}