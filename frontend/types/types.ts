export type UserAuth = {
  object: string;
  status: string;
  message: string;
};

export type UserToken = {
  id: any;
  iss: string;
  sub: string;
  exp: number;
  iat: number;
  roles: UserRoles;
};

export type UserRoles = "USER" | "ADMIN" | "SUPERADMIN";
