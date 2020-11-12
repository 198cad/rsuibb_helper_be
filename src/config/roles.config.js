export const roles = (...roles) => {
  return (req, res, next) => {
    res.json({ message: roles });
  };
};
