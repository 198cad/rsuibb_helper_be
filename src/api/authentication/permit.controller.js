import Joi from "@hapi/joi";
import { badRequest, created, internalServerError, ok } from "../../res/http.res";
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
  const { id } = req.params;
  const { page, limit, role, service } = req.query;

  if (role !== undefined) {
    Permits.paginate(
      {},
      {
        page: page || 1,
        limit: limit || 10,
        populate: [
          { path: "role", match: { role_name: role || "" } },
          { path: "service", match: { service: service || "" } },
        ],
      },
      (error, result) => {
        if (error) {
          internalServerError(res, error);
        } else {
          ok(res, result);
        }
      }
    );
  } else if (service !== undefined) {
    Permits.paginate(
      {},
      {
        page: page || 1,
        limit: limit || 10,
        populate: [
          { path: "role", match: { role_name: role || "" } },
          { path: "service", match: { service: service || "" } },
        ],
      },
      (error, result) => {
        if (error) {
          internalServerError(res, error);
        } else {
          ok(res, result);
        }
      }
    );
  } else {
    if (id === undefined) {
      Permits.paginate(
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
      Permits.findOne({ _id: id }, (error, result) => {
        if (error) {
          notFound(res, error);
        } else {
          ok(res, result);
        }
      });
    }
  }
};

export const updatePermit = (req, res) => {
  const { id } = req.params;
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
      Permits.updateOne({ _id: id }, { $set: result }, (error, result) => {
        if (error) {
          internalServerError(res, error);
        } else {
          ok(res, result);
        }
      });
    }
  });
};
