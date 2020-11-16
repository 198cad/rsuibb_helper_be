const SERVICE_NAME = "AUTH";
import User from "../user/user.model";
import { compare } from "bcrypt";
import { notFound, ok, forbidden } from "../../res/http.res";
import { generateToken, verifyToken } from "../../config/jwt.config";

export const login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, async (error, doc) => {
    if (error) {
      notFound(res, error);
    } else {
      const match = await compare(password, doc.password);
      if (match) {
        const token = await generateToken(doc);
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
