import { config } from "dotenv";

const configDevEnv = () => {

    config({ path: "config/dev.env" });

    const mode = process.env.NODE_ENV;
    const dbType = process.env.DATABASE_TYPE;

    if (dbType === 'firebase') {
        console.log('Using Firebase as the database.');
    } else if (dbType === 'mongo') {
        console.log('Using MongoDB as the database.');
    } else {
        console.log('Unknown database type, defaulting to MongoDB.');
    }

    if (mode === 'additionalMode') {
        console.log('Additional mode is active, but no configuration is loaded.');
    } else {
        config({ path: `config/${mode}.env` });
    }
};

export default configDevEnv;
