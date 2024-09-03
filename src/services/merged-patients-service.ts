import { IMergedPatientService } from './interfaces/IMergedPatientService';
import { MongoMergedPatientService } from './mongo/MongoMergedPatientService';
import { FirebaseMergedPatientService } from './firebase/FirebaseMergedPatientService';

export const mergedPatientServiceFactory = (): IMergedPatientService => {
    const databaseType = process.env.DATABASE_TYPE || 'MongoDB';

    switch (databaseType) {
        case 'Firebase':
            return new FirebaseMergedPatientService();
        case 'MongoDB':
        default:
            return new MongoMergedPatientService();
    }
};
