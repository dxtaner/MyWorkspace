const Business = require('../models/Business');
const Category = require('../models/Category');
const User = require('../models/User');

exports.createBusiness = async (req, res) => {
    const { name, category, location, owner, reviews, images } = req.body;

    try {
        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(400).json({ message: 'Category not found' });
        }

        const user = await User.findById(owner);
        if (!user) {
            return res.status(400).json({ message: 'Owner not found' });
        }

        const newBusiness = new Business({
            name,
            category,
            location,
            owner,
            reviews,
            images,
        });

        await newBusiness.save();
        res.status(201).json({
            message: 'Business created successfully',
            business: newBusiness,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating business', error });
    }
};

exports.getAllBusinesses = async (req, res) => {
    try {
        const businesses = await Business.find().populate('category').populate('owner');
        res.status(200).json(businesses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching businesses', error });
    }
};

exports.getBusinessById = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id).populate('category').populate('owner');
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }

        res.status(200).json(business);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching business', error });
    }
};

exports.updateBusiness = async (req, res) => {
    const { name, category, location, reviews, images } = req.body;

    try {
        const business = await Business.findById(req.params.id);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }

        const updatedBusiness = await Business.findByIdAndUpdate(
            req.params.id,
            { name, category, location, reviews, images },
            { new: true }
        );

        res.status(200).json({
            message: 'Business updated successfully',
            business: updatedBusiness,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating business', error });
    }
};

exports.deleteBusiness = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }

        await Business.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Business deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting business', error });
    }
};
