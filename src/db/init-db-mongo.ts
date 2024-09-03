import { Logger } from "../logs/logger";
import { patientServiceFactory } from '../services/patientServiceFactory';

import { patients } from "./initial-data";
import Patient from "./models/patient-model";


const patientService = patientServiceFactory();

const initMongoDB = async () => {
    const patientsCount = await Patient.countDocuments();

    if (patientsCount !== 0) return;

    for (let i = 0; i < patients.length; i++) {
        const patientData = patients[i];
        await patientService.createPatient(patientData);
    }

    Logger.log("Patients are created in MongoDB");
}

export default initMongoDB;
