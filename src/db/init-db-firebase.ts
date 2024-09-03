import { Logger } from "../logs/logger";
import { patients } from "./initial-data";
import { addDoc, collection, Firestore } from "firebase/firestore";

const initFirebaseDB = async (db: Firestore) => {

    for (let i = 0; i < patients.length; i++) {
        const patientData = patients[i];
        ////await addDoc(collection(db, "patients"), patientData);
        Logger.log(`Simulating addition of patient: ${JSON.stringify(patientData)}`);
    }

    Logger.log("Patients are created in Firebase");
}

export default initFirebaseDB;
