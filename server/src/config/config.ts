import dotenv from "dotenv";

type TConfig = {

    [Key: string]: EnvironmentConfig;
};

type EnvironmentConfig = {

    db: mongoDBconfig;
    app: AppConfig
};

type AppConfig = {

    PORT: string | number;
};

type mongoDBconfig = {

    URI: string
};

if (process.env.NODE_ENV === 'production') {

    dotenv.config({ path: '.env.production' });

} else {

    dotenv.config({ path: '.env.development' })
};

const ENV = process.env.NODE_ENV ?? 'development';


const CONFIG: TConfig = {

    development: {

        app: {
            PORT: process.env.PORT || 5001,
        },

        db: {
            URI: process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/express"
        }
    },

    production: {

        app: {

            PORT: process.env.PORT || 5001,
        },

        db: {
            URI: process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/express"
        }
    },
}

export default CONFIG[ENV];