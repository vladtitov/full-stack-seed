
import {Application} from "express";
import {apiGetAllPosts} from './apiGetAllPosts';
import {apiLogin} from './apiLogin';
import {apiGetMenu} from './apiGetMenu';


export function initRestApi(app: Application ): void {

  app.route("/api/posts").get(apiGetAllPosts);
  app.route("/api/menu/:stamp").get(apiGetMenu);

}

