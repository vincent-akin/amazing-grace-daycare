import { z } from "zod";

export const admissionSchema = z.object({
    parentName: z.string().min(2),
    parentEmail: z.string().email(),
    parentPhone: z.string().min(10),
    childName: z.string().min(2),
    childDob: z.string(),
    childGender: z.enum(["Male", "Female"]),
    medicalNotes: z.string().optional(),
});