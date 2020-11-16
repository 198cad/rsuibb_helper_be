/*
TODO :
- createUser *
- readUser *
- updateUser
- deleteUser
- loginUser
*/
const SERVICE_NAME = "USER";
import { created, badRequest, internalServerError, ok, conflict, notFound } from "../../res/http.res";
import User from "./user.model";
import Joi from "@hapi/joi";
import { hash } from "../../config/bcrypt.config";

export const createUser = (req, res) => {
  const METHODE_NAME = "CREATE";
  const joiSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    is_active: Joi.boolean().required(),
  });

  Joi.validate(req.body, joiSchema, async (error, result) => {
    if (error) {
      badRequest(res, error);
    } else {
      const password = await hash(result.password);
      User.create(
        { username: result.username, password, role: result.role, is_active: result.is_active },
        (error, doc) => {
          if (error) {
            if (error._message === "Users validation failed") {
              conflict(res, error);
            } else {
              internalServerError(res, error);
            }
          } else {
            created(res, { _id: doc._id, username: doc.username, role: doc.role, is_active: doc.is_active });
          }
        }
      );
    }
  });
};

export const readUser = (req, res) => {
  const METHODE_NAME = "READ";
  const { id } = req.params;
  const { page, limit } = req.query;

  if (id === undefined) {
    User.paginate(
      {},
      {
        page: page || 1,
        limit: limit || 10,
      },
      (error, result) => {
        ok(res, result);
      }
    );
  } else {
    User.findOne({ _id: id }, (error, result) => {
      if (error) {
        notFound(res, error);
      } else {
        ok(res, result);
      }
    });
  }
};
