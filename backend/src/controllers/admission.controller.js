import {
    createAdmission,
    getAllAdmissions,
    approveAdmission,
    rejectAdmission,
} from "../services/admission.service.js";

import { admissionSchema } from "../validators/admission.validator.js";

export const submitAdmission = async (req, res) => {
    try {
        const validatedData = admissionSchema.parse(req.body);

        const admission = await createAdmission(validatedData);

        res.status(201).json({
            success: true,
            admission,
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.errors || err.message,
        });
    }
};

export const getAdmissions = async (req, res) => {
    try {
        const admissions = await getAllAdmissions();

        res.json(admissions);

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const approve = async (req, res) => {
    try {
        const result = await approveAdmission(req.params.id);

        res.json({
            success: true,
            result,
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

export const reject = async (req, res) => {
    try {
        const result = await rejectAdmission(req.params.id);

        res.json({
            success: true,
            result,
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};