import bcrypt from "bcrypt";

export const encrypt = (text) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(text, salt);
  return hash;
};
