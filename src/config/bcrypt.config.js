import bcrypt from "bcrypt";

export const hash = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const compare = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  if (match) {
    return match;
  }
  {
    return false;
  }
};
