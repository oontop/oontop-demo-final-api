import { IMergedPatientService } from '../interfaces/IMergedPatientService';
import MergedPatient from "../../db/models/merged-patient-model";

export class MongoMergedPatientService implements IMergedPatientService {
    async saveMergedPatient(data: any) {
        const newMergedPatient = new MergedPatient(data);
        return await newMergedPatient.save();
    }

    async getAllMergedPatients() {
        return MergedPatient.find();
    }

    async getMergedPatientById(id: string) {
        return MergedPatient.findById(id);
    }

    async updateMergedPatient(id: string, data: any) {
        return MergedPatient.findByIdAndUpdate(id, data, { new: true });
    }


}
