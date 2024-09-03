import { IMergedPatient } from "../@types/@types";
import MergedPatient from "../db/models/merged-patient-model";

export const mergedPatientService = {


    saveMergedPatient: async (data: IMergedPatient) => {

        const newMergedPatient = new MergedPatient(data);
        return await newMergedPatient.save();
    },

    getAllMergedPatients: async () => MergedPatient.find(),


    getMergedPatientById: async (id: string) => {
        return MergedPatient.findById(id);
    },

    deleteMergedPatient: async (id: string) => {
        return MergedPatient.findByIdAndDelete(id);
    },

    updateMergedPatient: async (id: string, data: IMergedPatient) => {
        return MergedPatient.findByIdAndUpdate(id, data, { new: true })
    },


};