import { get } from "env-var";

const env = (name: string, required = true) => get(name).required(required);

export const config = {
  port: env("PORT").asPortNumber(),
  saltRounds: 12,
};

export const dbConfig = {
  url: env("DATABASE_URL").asString(),
};
