import patientSchema from "../../validations/patient-schema";

import { validateSchema } from "./validate-schema";


export const validatePatient = validateSchema(patientSchema);