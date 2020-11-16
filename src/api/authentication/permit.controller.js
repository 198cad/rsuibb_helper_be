import Joi from "@hapi/joi";
import { badRequest, created, internalServerError } from "../../res/http.res";
import Permits from "./permit.model";

export const createPermit = (req, res) => {
  const schema = Joi.object().keys({
    role: Joi.string().required(),
    service: Joi.string().required(),
    create: Joi.boolean().required(),
    read: Joi.boolean().required(),
    update: Joi.boolean().required(),
    delete: Joi.boolean().required(),
    search: Joi.boolean().required(),
    print: Joi.boolean().required(),
    report: Joi.boolean().required(),
    strict: Joi.boolean().required(),
  });
  Joi.validate(req.body, schema, (error, result) => {
    if (error) {
      badRequest(res, error);
    } else {
      Permits.create(result, (error, result) => {
        if (error) {
          internalServerError(res, error);
        } else {
          created(res, result);
        }
      });
    }
  });
};

export const readPermit = (req, res) => {
  const { service, role } = req.query;
};
