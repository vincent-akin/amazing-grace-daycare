import {
    getAllChildren,
    getChildById,
    updateChild,
    deactivateChild,
} from "../services/child.service.js";

export const getChildren = async (req, res) => {
    const children = await getAllChildren();
    res.json(children);
};

export const getChild = async (req, res) => {
    try {
        const child = await getChildById(req.params.id);
        res.json(child);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const update = async (req, res) => {
    try {
        const child = await updateChild(req.params.id, req.body);
        res.json(child);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deactivate = async (req, res) => {
    try {
        const child = await deactivateChild(req.params.id);
        res.json(child);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};