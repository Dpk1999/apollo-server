import { config } from 'dotenv';

import Joi from 'joi';

config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .default('development'),
  PORT: Joi.number()
    .default(9001),
  SERVICE_URL: Joi.string()
    .default('http://localhost:8080'),
}).unknown()
  .required();

const { value: envVars } = Joi.validate(process.env, envVarsSchema);

const configuration = Object.freeze({
  env: process.env.NODE_ENV,
  port: envVars.PORT,
  secret: process.env.jwtSECRET,
  serviceUrl: process.env.SERVICE_URL,
  password: process.env.PASSWORD,
});

export default configuration;
