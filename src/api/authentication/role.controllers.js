import Role from "./role.model";

export const createRole = (name) => {
  Role.create({
    roleName: name,
    services: [],
  });
};
