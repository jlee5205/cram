const reviewsDB = require('../db/reviews.js');

// id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
// user_id uuid REFERENCES users(id) ON DELETE CASCADE,
// spot_id INT REFERENCES spots(id) ON DELETE CASCADE,
// rating INT CHECK (rating BETWEEN 1 AND 5),
// comment text NOT NULL,
// created_at TIMESTAMP DEFAULT NOW(),
// UNIQUE (user_id, spot_id)
const createReview = async (req, res) => {
    try {
        const { user_id, spot_id, rating, comment } = req.body;
        const result = await reviewsDB.createReview({user_id, spot_id, rating, comment});
        res.status(201).json(result.rows[0]);
    }
    catch (err){
        res.status(500).json({error: err.message});
    }
}

const getReviews = async (req, res) => {
    try {
        const { spot_id } = req.params;
        const result = await reviewsDB.getReviews({spot_id});
        res.json(result.rows);
    }
    catch (err){
        res.status(500).json({error: err.message});
    }

};

module.exports = {
    createReview,
    getReviews
};