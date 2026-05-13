import prisma from "../config/prisma.js";

export const createAdmission = async (data) => {
    return await prisma.admission.create({
        data,
    });
};

export const getAllAdmissions = async () => {
    return await prisma.admission.findMany({
        orderBy: {
            submittedAt: "desc",
        },
    });
};
export const approveAdmission = async (admissionId) => {
    return await prisma.$transaction(async (tx) => {
        const admission = await tx.admission.findUnique({
            where: { id: admissionId },
        });

        if (!admission) {
            throw new Error("Admission not found");
        }

        if (admission.status !== "PENDING") {
            throw new Error("Admission already processed");
        }

        const parent = await tx.parent.create({
            data: {
                name: admission.parentName,
                email: admission.parentEmail,
                phone: admission.parentPhone,
            },
        });

        const child = await tx.child.create({
            data: {
                name: admission.childName,
                dob: admission.childDob,
                gender: admission.childGender,
                medicalNotes: admission.medicalNotes,
                parentId: parent.id,
            },
        });

        await tx.admission.update({
            where: { id: admissionId },
            data: { status: "APPROVED" },
        });

        return { parent, child };
    });
};

export const rejectAdmission = async (admissionId) => {
    return await prisma.admission.update({
        where: { id: admissionId },
        data: {
            status: "REJECTED",
        },
    });
};