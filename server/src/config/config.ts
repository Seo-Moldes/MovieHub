import dotenv from "dotenv";
import { getEnvVar } from '../utils/getEnvVar';
import { APP_ORIGIN, AUTH0_AUDIENCE, AUTH0_ISSUER } from "./authReferences";
import { type } from "os";

dotenv.config();

type TConfig = {
  [key: string]: EnvironmentConfig;

};

type EnvironmentConfig = {
  app: AppConfig;
  auth0: AuthConfig;
  cloudinary: CloudinaryConfig;

};

type CloudinaryConfig = {

  cloudinary_name: string | undefined;
  cloudinary_api_key: string | undefined;
  cloudinary_api_secret: string | undefined;

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

    cloudinary: {

      cloudinary_name: process.env.CLOUDINARY_NAME,
      cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
      cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET

    }
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

    cloudinary: {

      cloudinary_name: process.env.CLOUDINARY_NAME,
      cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
      cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET

    }
  },
};

export default CONFIG[ENV];


