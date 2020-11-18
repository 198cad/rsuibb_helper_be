import User from "../user/user.model";
import { compare } from "bcrypt";
import { notFound, ok, forbidden, internalServerError } from "../../res/http.res";
import { generateToken, verifyToken } from "../../config/jwt.config";

export const login = (req, res) => {
  const { username, password } = req.body;
  console.log(password);
  User.findOne({ username }, async (error, docs) => {
    if (error) {
      internalServerError(res, error);
    } else {
      if (docs) {
        const match = await compare(password, docs.password);
        if (match) {
          const token = await generateToken(docs);
          //   Response disesuaikan dengan spesifikasi JKN Mobile BPJS
          res.status(200).json({
            response: {
              token,
            },
            metadata: {
              message: "Ok",
              code: 200,
            },
          });
        } else {
          forbidden(res, "Password not matched !");
        }
      } else {
        notFound(res, "data tidak ditemukan");
      }
    }
  });
};

export const checkToken = (req, res) => {
  const token = req.header("x-token");
  const decode = verifyToken(token);
  const { payload } = decode;
  if (payload !== undefined) {
    ok(res, payload);
  } else {
    forbidden(res, decode);
  }
};
