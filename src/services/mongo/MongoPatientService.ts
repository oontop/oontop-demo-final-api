import { IPatientService } from '../interfaces/IPatientService';
import Patient from "../../db/models/patient-model";
import { Logger } from "../../logs/logger";
import _ from "underscore";

const generateBizNumber = async () => {
    while (true) {
        const r = _.random(1_000_000, 9_999_999);
        const dbRes = await Patient.findOne({ bizNumber: r });
        if (!dbRes) {
            return r;
        }
    }
}

export class MongoPatientService implements IPatientService {
    async createPatient(data: any) {
        const patient = new Patient(data);

        patient.bizNumber = await generateBizNumber();

        Logger.log(patient.bizNumber);
        return patient.save();
    }

    async getAllPatients() {
        return Patient.find();
    }
}
