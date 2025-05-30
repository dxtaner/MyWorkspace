const Review = require('../models/Review');

exports.getReviewsByBusiness = async (req, res) => {
    try {
        const reviews = await Review.find({ business: req.params.businessId })
            .populate('user', 'username email')
            .populate('business', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
};

exports.addReview = async (req, res) => {
    try {
        const { business, user, rating, comment } = req.body;

        const existingReview = await Review.findOne({ business, user });
        if (existingReview) {
            return res.status(400).json({ message: 'User has already reviewed this business' });
        }

        const newReview = new Review({ business, user, rating, comment });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: 'Error adding review', error });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
            .populate('user', 'username email')
            .populate('business', 'name');
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching review', error });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: 'Error updating review', error });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
};
