
import {Request, Response} from "express";
import * as _ from "lodash";
import {onError} from "./com";
import {onSuccess} from "./com";
//import {findAllPosts} from '../queries/findAllPosts';
import {PostModel} from '../model/model';


export function apiGetAllPosts(req: Request, res: Response): void {

    PostModel.findAll({
   //  order: ['seqNo']
   })
   .then((res:any[]) => {
     return res.map(function ({id, description}) {
       return {id, description};
     })
     })
      .then(_.partial(onSuccess,res))
      .catch(_.partial(onError, res, "Find All Posts Failed"));
    /*
      findAllPosts()
        .then(_.partial(onSuccess,res))
        .catch(_.partial(onError, res, "Find All Posts Failed"));
  */
}

