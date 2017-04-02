
import {Application} from "express";
import {apiGetAllPosts} from './apiGetAllPosts';
import {apiLogin} from './apiLogin';


export function initRestApi(app: Application ): void {

  app.route("/api/posts").get(apiGetAllPosts);

}

