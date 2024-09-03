import { IPatientService } from './interfaces/IPatientService';
import { MongoPatientService } from './mongo/MongoPatientService';
import { FirebasePatientService } from './firebase/FirebasePatientService';

export const patientServiceFactory = (): IPatientService => {
    return process.env.DATABASE_TYPE === 'firebase'
        ? new FirebasePatientService()
        : new MongoPatientService();
};
