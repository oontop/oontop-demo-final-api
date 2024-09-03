export interface IMergedPatientService {
    saveMergedPatient(data: any): Promise<any>;
    getAllMergedPatients(): Promise<any>;
    getMergedPatientById(id: string): Promise<any>;
    updateMergedPatient(id: string, data: any): Promise<any>;

}