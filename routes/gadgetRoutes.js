const express = require('express');
const { 
    getAllGadgets, 
    getGadgetById, 
    addGadget, 
    updateGadget, 
    deleteGadget, 
    selfDestruct 
} = require('../controllers/gatgetControllers');  

const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticate, getAllGadgets); 
router.get('/:id', authenticate, getGadgetById); 
router.post('/', authenticate, addGadget); 
router.patch('/:id', authenticate, updateGadget);
router.delete('/:id', authenticate, deleteGadget);
router.post('/:id/self-destruct', authenticate, selfDestruct);

module.exports = router;
