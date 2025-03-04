const Gadget = require('../models/Gadget');
const { generateCodename, generateSuccessProbability } = require('../utils/helpers');

exports.getAllGadgets = async (req, res) => {
    try {
        const { status } = req.query;
        const whereClause = status ? { status } : {}; // Filter by status if provided

        const gadgets = await Gadget.findAll({ where: whereClause });
        const gadgetsWithProbability = gadgets.map(gadget => ({
            ...gadget.toJSON(),
            successProbability: `${generateSuccessProbability()}%`
        }));

        res.json(gadgetsWithProbability);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch gadgets' });
    }
};

exports.getGadgetById = async (req, res) => {
    try {
        const { id } = req.params;
        const gadget = await Gadget.findByPk(id);

        if (!gadget) {
            return res.status(404).json({ error: 'Gadget not found' });
        }

        res.json({
            ...gadget.toJSON(),
            successProbability: `${generateSuccessProbability()}%`
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch gadget' });
    }
};


exports.addGadget = async (req, res) => {
    try {
        const { name } = req.body;
        const gadget = await Gadget.create({ name: name + generateCodename() });
        res.status(201).json(gadget);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add gadget' });
        console.log(error)
    }
};

exports.updateGadget = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status } = req.body;
        await Gadget.update({ name, status }, { where: { id } });
        res.json({ message: 'Gadget updated' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update gadget' });
    }
};

exports.deleteGadget = async (req, res) => {
    try {
        const { id } = req.params;
        await Gadget.update({ status: 'Decommissioned', decommissionedAt: new Date() }, { where: { id } });
        res.json({ message: 'Gadget decommissioned' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to decommission gadget' });
    }
};

exports.selfDestruct = async (req, res) => {
    try {
        const { id } = req.params;
        const confirmationCode = Math.floor(100000 + Math.random() * 900000);
        res.json({ message: `Self-destruct sequence initiated for gadget ${id}`, confirmationCode });
    } catch (error) {
        res.status(500).json({ error: 'Failed to initiate self-destruct' });
    }
};
