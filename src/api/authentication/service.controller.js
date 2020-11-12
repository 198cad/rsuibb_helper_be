import Service from "./service.model";
import Joi from "@hapi/joi";
import { ok, internalServerError, badRequest, created } from "../../res/http.res";

export const createService = (req, res) => {
  const schema = Joi.object().keys({
    service: Joi.string().required().min(2),
    is_active: Joi.boolean().required(),
  });
  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      badRequest(res, err);
      return null;
    } else {
      Service.create(result, (err, doc) => {
        if (err) {
          internalServerError(res, err);
          return null;
        } else {
          created(res, doc);
          return null;
        }
      });
    }
  });
};

/*

read all

read one


*/
export const readService = (req, res) => {
  const { authorization } = req.headers;
  console.log(authorization);
  res.send("OK");
};
