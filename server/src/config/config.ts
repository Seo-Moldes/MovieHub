import dotenv from "dotenv";
import { getEnvVar } from '../utils/getEnvVar';
import { APP_ORIGIN, AUTH0_AUDIENCE, AUTH0_ISSUER } from "./authReferences";

dotenv.config();

type TConfig = {
  [key: string]: EnvironmentConfig;
};

type EnvironmentConfig = {
  app: AppConfig;
  auth0: AuthConfig;
};
type AppConfig = {
  PORT: string | number;
};
type AuthConfig = {
  client_origin: string;
  audience: string;
  issuer: string;
};

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG: TConfig = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    auth0: {
      client_origin: getEnvVar(APP_ORIGIN),
      audience: getEnvVar(AUTH0_AUDIENCE),
      issuer: getEnvVar(AUTH0_ISSUER),
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 4002,
    },
    auth0: {
        client_origin: getEnvVar(APP_ORIGIN),
        audience: getEnvVar(AUTH0_AUDIENCE),
        issuer: getEnvVar(AUTH0_ISSUER),
    },
  },
};

export default CONFIG[ENV];


