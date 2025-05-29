const BusinessImage = require('../models/BusinessImage');
const Business = require('../models/Business');
const fs = require('fs');

exports.getBusinessImages = async (req, res) => {
    try {
        const { businessId } = req.params;
        
        const business = await Business.findById(businessId);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }

        const images = await BusinessImage.find({ business: businessId });
        res.status(200).json(images);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching business images', error });
    }
};

exports.addBusinessImage = async (req, res) => {
    try {
        const { businessId } = req.body;

        const business = await Business.findById(businessId);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        const newImage = new BusinessImage({
            business: businessId,
            imageUrl: req.file.path,  
        });

        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding business image', error });
    }
};

// Resmi sil
exports.deleteBusinessImage = async (req, res) => {
    try {
        const { id } = req.params;

        const image = await BusinessImage.findById(id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        fs.unlinkSync(image.imageUrl); 

        await BusinessImage.findByIdAndDelete(id);
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting image', error });
    }
};
