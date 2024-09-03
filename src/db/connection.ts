import mongoose from "mongoose";
import initMongoDB from "./init-db-mongo";
import initFirebaseDB from "./init-db-firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../config/firebaseConfig";

const connect = async () => {
    const databaseType = process.env.DATABASE_TYPE;

    if (databaseType === "mongo") {
        const connectionString = process.env.DB_CONNECTION_STRING;

        if (!connectionString) {
            console.log("DB_CONNECTION_STRING is not defined in your .env file");
            return;
        }
        try {
            await mongoose.connect(connectionString);
            await initMongoDB();
            console.log("<< MongoDB Connected >>");
        } catch (e) {
            console.log(e);
        }
    } else if (databaseType === "firebase") {
        try {
            const firebaseApp = initializeApp(firebaseConfig);
            const db = getFirestore(firebaseApp);
            await initFirebaseDB(db);
            console.log("<< Firebase Connected >>");
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log("Unknown DATABASE_TYPE. Please set it to 'mongo' or 'firebase'.");
    }
};

export default connect;
