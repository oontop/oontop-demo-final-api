import { IPatientService } from '../interfaces/IPatientService';
import { db } from '../../../config/firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Logger } from "../../logs/logger";

export class FirebasePatientService implements IPatientService {

    async createPatient(data: any) {

        const docRef = await addDoc(collection(db, "patients"), data);
        Logger.log(`New patient created with ID: ${docRef.id}`);
        return docRef.id;
    }

    async getAllPatients() {
        const querySnapshot = await getDocs(collection(db, "patients"));
        return querySnapshot.docs.map(doc => doc.data());
    }
}
