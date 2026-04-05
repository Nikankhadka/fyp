import { hash } from "bcrypt";

const DEFAULT_SALT_ROUNDS = 8;

export const getPasswordSaltRounds = () => {
  const configuredRounds =
    process.env.saltRounds ??
    process.env.salt_rounds ??
    String(DEFAULT_SALT_ROUNDS);

  const parsedRounds = Number(configuredRounds);
  return Number.isFinite(parsedRounds) && parsedRounds > 0
    ? parsedRounds
    : DEFAULT_SALT_ROUNDS;
};

export const hashPassword = async (password: string) =>
  hash(password, getPasswordSaltRounds());
