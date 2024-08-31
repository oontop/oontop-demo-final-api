import { Router } from "express";

import { mergedPatientService } from "../services/merged-patients-service";

import { validateToken } from "../middleware/validate-token";

import OonTopError from "../errors/OonTopError";
import { Logger } from "../logs/logger";
import { validatePatient } from "../middleware/joi";
import { isAdmin } from "../middleware/is-admin";





const router = Router();

/**
 * @swagger
 * /api/v1/merged-patients:
 *   post:
 *     summary: Create a new merged patient
 *     description: Save a new merged patient to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MergedPatient'
 *     responses:
 *       201:
 *         description: The patient was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MergedPatient'
 *       500:
 *         description: Server error
 */

router.post('/', validatePatient, async (req, res, next) => {
    try {
        const result = await mergedPatientService.saveMergedPatient(req.body);
        res.status(201).json(result);
    } catch (e) {
        next(e)
    }
});



/**
 * @swagger
 * /api/v1/merged-patients:
 *   get:
 *     summary: Get all merged patients
 *     description: Retrieve a list of all merged patients.
 *     responses:
 *       200:
 *         description: A list of merged patients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MergedPatient'
 *       500:
 *         description: Server error
 */





router.get("/", async (req, res, next) => {
    try {
        const patients = await mergedPatientService.getAllMergedPatients();
        res.json(patients);
    } catch (e) {
        next(e);
    }
});





/**
 * @swagger
 * /api/v1/merged-patients/{id}:
 *   get:
 *     summary: Get a merged patient by ID
 *     description: Retrieve a specific merged patient by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the merged patient
 *     responses:
 *       200:
 *         description: The patient data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MergedPatient'
 *       400:
 *         description: No ID provided
 *       500:
 *         description: Server error
 */

router.get("/:id", async (req, res, next) => {
    try {
        const patient = await mergedPatientService.getMergedPatientById(req.params.id);
        if (!patient) {
            Logger.error("No ID provided");
            throw new OonTopError(400, "No ID provided");
        }
        res.json(patient);
    } catch (e) {
        next(e);
    }
});




/**
 * @swagger
 * /api/v1/merged-patients/{id}:
 *   put:
 *     summary: Update a merged patient
 *     description: Update the details of a specific merged patient by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the merged patient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MergedPatient'
 *     responses:
 *       200:
 *         description: The updated patient data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MergedPatient'
 *       400:
 *         description: No ID provided
 *       500:
 *         description: Server error
 */





router.put("/:id", ...isAdmin, validateToken, validatePatient, async (req, res, next) => {
    try {
        const result = await mergedPatientService.updateMergedPatient(req.params.id, req.body);
        if (!result) {
            Logger.error("No ID provided");
            throw new OonTopError(400, "No ID provided");
        }
        res.json(result);
    } catch (e) {
        next(e);
    }

});




/**
 * @swagger
 * /api/v1/merged-patients/{id}:
 *   delete:
 *     summary: Delete a merged patient by ID
 *     description: Delete a specific merged patient by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the merged patient
 *     responses:
 *       200:
 *         description: The patient was successfully deleted
 *       400:
 *         description: No ID provided
 *       500:
 *         description: Server error
 */


router.delete("/:id", ...isAdmin, validateToken, async (req, res, next) => {

    try {
        await mergedPatientService.deleteMergedPatient(req.params.id);

        res.json("Card are Deleted");

    } catch (e) {
        next(e);
    }
});

export { router as mergedpatientsRouter }