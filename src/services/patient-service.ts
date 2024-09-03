import { IPatientService } from './interfaces/IPatientService';
import { MongoPatientService } from './mongo/MongoPatientService';
import { FirebasePatientService } from './firebase/FirebasePatientService';

export const patientServiceFactory = (): IPatientService => {
    const databaseType = process.env.DATABASE_TYPE || 'MongoDB';

    switch (databaseType) {
        case 'Firebase':
            return new FirebasePatientService();
        case 'MongoDB':
        default:
            return new MongoPatientService();
    }
};
