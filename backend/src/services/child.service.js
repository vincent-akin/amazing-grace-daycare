import prisma from "../config/prisma.js";

export const getAllChildren = async () => {
    return await prisma.child.findMany({
        include: {
            parent: true,
        },
        orderBy: {
            name: "asc",
        },
    });
};

export const getChildById = async (id) => {
    const child = await prisma.child.findUnique({
        where: { id },
        include: {
        parent: true,
        },
    });

    if (!child) {
        throw new Error("Child not found");
    }

    return child;
};

export const updateChild = async (id, data) => {
    return await prisma.child.update({
        where: { id },
        data,
    });
};

export const deactivateChild = async (id) => {
    return await prisma.child.update({
        where: { id },
        data: {
            status: "INACTIVE",
        },
    });
};