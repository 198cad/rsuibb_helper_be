import Roles from "./role.model";
import Joi from "@hapi/joi";
import { badRequest, internalServerError, created, ok, notFound } from "../../res/http.res";

export const createRole = (req, res) => {
  const schema = Joi.object().keys({
    role_name: Joi.string().required(),
    is_active: Joi.boolean().required(),
  });
  Joi.validate(req.body, schema, (error, result) => {
    if (error) {
      badRequest(res, error);
    } else {
      Roles.create(result, (error, result) => {
        if (error) {
          internalServerError(res, error);
        } else {
          created(res, result);
        }
      });
    }
  });
};

export const readRole = (req, res) => {
  const { id } = req.params;
  const { page, limit } = req.query;

  if (id === undefined) {
    Roles.paginate(
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
    Roles.findOne({ _id: id }, (error, result) => {
      if (error) {
        notFound(res, error);
      } else {
        ok(res, result);
      }
    });
  }
};

export const updateRole = (req, res) => {
  const { id } = req.params;
  const schema = Joi.object().keys({
    role_name: Joi.string().required(),
    is_active: Joi.boolean().required(),
  });

  Joi.validate(req.body, schema, (error, result) => {
    if (error) {
      badRequest(res, error);
    } else {
      Roles.updateOne({ _id: id }, { $set: result }, (error, result) => {
        if (error) {
          internalServerError(res, error);
        } else {
          ok(res, result);
        }
      });
    }
  });
};
export const deleteRole = (req, res) => {
  const { id } = req.params;
  Roles.deleteOne({ _id: id }, (error, result) => {
    if (error) {
      internalServerError(res, error);
    } else {
      ok(res, result);
    }
  });
};
