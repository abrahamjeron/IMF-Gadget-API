const Gadget = require('../models/Gadget');
const { generateCodename, generateSuccessProbability } = require('../utils/helpers');

// fetch all the gadgets from the database

exports.getAllGadgets = async (req, res) => {
    try {
        const { status } = req.query;
        // to filter out based on the gadget's status
        const whereClause = status ? { status } : {}; 
        const gadgets = await Gadget.findAll({ where: whereClause });
        // to append random succes probablity
        const gadgetsWithProbability = gadgets.map(gadget => ({
            ...gadget.toJSON(),
            successProbability: `${generateSuccessProbability()}%`
        }));

        res.json(gadgetsWithProbability);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch gadgets' });
    }
};

// fetch a gadget by it's id (addon feature not mentioned in the document)
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

// Add new gadget into the database
exports.addGadget = async (req, res) => {
    try {
        const { name } = req.body;
        // append with the code word
        const gadget = await Gadget.create({ name: name + generateCodename() });
        res.status(201).json(gadget);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add gadget' });
        console.log(error)
    }
};

// Update the existing gadget
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

// Deleting the existing gadget
exports.deleteGadget = async (req, res) => {
    try {
        const { id } = req.params;
        await Gadget.update({ status: 'Decommissioned', decommissionedAt: new Date() }, { where: { id } }); //here the data is not deleted instead it's status is updated as 'Decommissioned'
        res.json({ message: 'Gadget decommissioned' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to decommission gadget' });
    }
};

// Self Destruction on individual data
exports.selfDestruct = async (req, res) => {
    try {
        const { id } = req.params;
        const confirmationCode = Math.floor(100000 + Math.random() * 900000); // to prouce confirmation code
        res.json({ message: `Self-destruct sequence initiated for gadget ${id}`, confirmationCode });
    } catch (error) {
        res.status(500).json({ error: 'Failed to initiate self-destruct' });
    }
};
