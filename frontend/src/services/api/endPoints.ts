const user = {
  signup: `users/sign-up`,
  login: `auth/login`,
  verify: (token: string) => `users/verifyRegistration?token=${token}`,
};

const destination = {};

const endpoints = {
  user,
  destination,
};

export default endpoints
