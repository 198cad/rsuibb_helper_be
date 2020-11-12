import { created, badRequest, forbidden, notFoun, internalServerError } from "../../res/http.res";
import User from "./user.model";

export const createUser = (req, res) => {
  User.create(req.body, (err, doc) => {
    if (err) {
      res.send("err");
    } else {
      created(res, doc);
    }
  });
};
