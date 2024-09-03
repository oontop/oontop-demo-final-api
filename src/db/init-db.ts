import { Logger } from "../logs/logger";
import { patientService } from "../services/patient-service";

import { patients } from "./initial-data";
import Patient from "./models/patient-model";


const initDB = async () => {

    const patientsCount = await Patient.countDocuments();

    if (patientsCount != 0) return;

    for (let i = 0; i < patients.length; i++) {
        const patientData = patients[i];
        await patientService.createPatient(patientData);


    }

    Logger.log("Patients are Created");
}

export default initDB;
