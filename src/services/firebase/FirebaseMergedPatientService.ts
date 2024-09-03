import { IMergedPatientService } from '../interfaces/IMergedPatientService';
import { db } from '../../../config/firebaseConfig';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";

export class FirebaseMergedPatientService implements IMergedPatientService {
    async saveMergedPatient(data: any) {
        const docRef = await addDoc(collection(db, "mergedPatients"), data);
        return docRef.id;
    }

    async getAllMergedPatients() {
        const querySnapshot = await getDocs(collection(db, "mergedPatients"));
        return querySnapshot.docs.map(doc => doc.data());
    }

    async getMergedPatientById(id: string) {
        const patientDoc = doc(db, "mergedPatients", id);
        const docSnap = await getDoc(patientDoc);
        return docSnap.data();
    }

    async updateMergedPatient(id: string, data: any) {
        const patientDoc = doc(db, "mergedPatients", id);
        await updateDoc(patientDoc, data);
        return { id, ...data };
    }

    async deleteMergedPatient(id: string) {
        const patientDoc = doc(db, "mergedPatients", id);
        await deleteDoc(patientDoc);
    }
}
