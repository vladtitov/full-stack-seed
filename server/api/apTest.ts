
import {Request, Response} from "express";
 // import * as _ from "lodash";
 // import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

export function apiTest(req: Request, res: Response): void {onSuccess(res,{data:"OK"});}

