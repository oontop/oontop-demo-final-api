import { config } from "dotenv";

const configDevEnv = () => {

    config({ path: "config/dev.env" });

    const mode = process.env.NODE_ENV;


    if (mode === 'additionalMode') {

        console.log('Additional mode is active, but no configuration is loaded.');
    } else {

        config({ path: `config/${mode}.env` });
    }
};

export default configDevEnv;

