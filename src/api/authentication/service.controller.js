const SERVICE_NAME = "SERVICE";
import Service from "./service.model";
import Joi from "@hapi/joi";
import { ok, internalServerError, badRequest, created, notFound } from "../../res/http.res";

export const createService = (req, res) => {
  const schema = Joi.object().keys({
    service_name: Joi.string().required().min(2),
    is_active: Joi.boolean().required(),
  });
  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      badRequest(res, err);
    } else {
      Service.create(result, (err, doc) => {
        if (err) {
          internalServerError(res, err);
        } else {
          created(res, doc);
        }
      });
    }
  });
};

export const readService = async (req, res) => {
  const { id } = req.params;
  const { page, limit } = req.query;

  if (id === undefined) {
    Service.paginate(
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
    Service.findOne({ _id: id }, (error, result) => {
      if (error) {
        notFound(res, error);
      } else {
        ok(res, result);
      }
    });
  }
};

export const updateService = (req, res) => {
  const { id } = req.params;
  const schema = Joi.object().keys({
    service_name: Joi.string().required().min(2),
    is_active: Joi.boolean().required(),
  });

  Joi.validate(req.body, schema, (error, result) => {
    if (error) {
      badRequest(res, error);
    } else {
      Service.updateOne({ _id: id }, { $set: result }, (error, result) => {
        if (error) {
          internalServerError(res, error);
        } else {
          ok(res, result);
        }
      });
    }
  });
};

export const deleteService = (req, res) => {
  const { id } = req.params;
  Service.deleteOne({ _id: id }, (error, result) => {
    if (error) {
      internalServerError(res, error);
    } else {
      ok(res, result);
    }
  });
};
