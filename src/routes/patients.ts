import { Router } from "express";
import { patientServiceFactory } from "../services/patientServiceFactory";

const router = Router();

const patientService = patientServiceFactory();


/**
 * @swagger
 * /api/v1/patients:
 *   get:
 *     summary: Get all patients
 *     description: Retrieve a list of all patients.
 *     responses:
 *       200:
 *         description: A list of patients.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patient'
 */
router.get("/", async (req, res, next) => {
    try {
        const patients = await patientService.getAllPatients();
        res.json(patients);
    } catch (e) {
        next(e);
    }
});

export { router as patientsRouter };
