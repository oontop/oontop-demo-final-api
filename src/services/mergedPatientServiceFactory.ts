import { IMergedPatientService } from './interfaces/IMergedPatientService';
import { MongoMergedPatientService } from './mongo/MongoMergedPatientService';
import { FirebaseMergedPatientService } from './firebase/FirebaseMergedPatientService';

export const mergedPatientServiceFactory = (): IMergedPatientService => {
    return process.env.DATABASE_TYPE === 'firebase'
        ? new FirebaseMergedPatientService()
        : new MongoMergedPatientService();
};
