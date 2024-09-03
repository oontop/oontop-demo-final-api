export interface IPatientService {
    getAllPatients(): Promise<any>;
    createPatient(data: any): Promise<any>;
}
