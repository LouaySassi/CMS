const express = require('express');
const router = express.Router();
const File = require('../models/File');

router.get('/', async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific file by ID
router.get('/:id', getFile, (req, res) => {
    res.json(res.file);
});

// Create a new file
router.post('/', async (req, res) => {
    const file = new File({
        name: req.body.name,
        content: req.body.content
    });

    try {
        const newFile = await file.save();
        res.status(201).json(newFile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a file
router.put('/:id', getFile, async (req, res) => {
    if (req.body.name != null) {
        res.file.name = req.body.name;
    }
    if (req.body.content != null) {
        res.file.content = req.body.content;
    }

    try {
        const updatedFile = await res.file.save();
        res.json(updatedFile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a file
router.delete('/:id', getFile, async (req, res) => {
    try {
        await res.file.remove();
        res.json({ message: 'Deleted file' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getFile(req, res, next) {
    let file;
    try {
        file = await File.findById(req.params.id);
        if (file == null) {
            return res.status(404).json({ message: 'Cannot find file' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.file = file;
    next();
}

module.exports = router;
