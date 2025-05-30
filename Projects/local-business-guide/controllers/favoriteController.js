const Favorite = require('../models/Favorite');

exports.getAllFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find()
            .populate('user', 'username email')
            .populate('business', 'name');
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching favorites', error });
    }
};

exports.getFavoritesByUser = async (req, res) => {
    try {
        const favorites = await Favorite.find({ user: req.params.userId })
            .populate('business', 'name location');
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user favorites', error });
    }
};

exports.addFavorite = async (req, res) => {
    try {
        const { user, business } = req.body;

        const existingFavorite = await Favorite.findOne({ user, business });
        if (existingFavorite) {
            return res.status(400).json({ message: 'Business is already in favorites' });
        }

        const newFavorite = new Favorite({ user, business });
        await newFavorite.save();
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(400).json({ message: 'Error adding favorite', error });
    }
};

exports.deleteFavorite = async (req, res) => {
    try {
        const deletedFavorite = await Favorite.findOneAndDelete({
            user: req.params.userId,
            business: req.params.businessId,
        });
        if (!deletedFavorite) {
            return res.status(404).json({ message: 'Favorite not found' });
        }
        res.status(200).json({ message: 'Favorite deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting favorite', error });
    }
};
