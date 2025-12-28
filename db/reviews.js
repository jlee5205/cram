const pool = require('./pool');

const createReview = async (review) => {
    const { user_id, spot_id, rating, comment } = review;
    return pool.query(
        `INSERT INTO reviews
        (user_id, spot_id, rating, comment)
        VALUES ($1, $2, $3, $4)`,
        [user_id, spot_id, rating, comment]
    );
}

//return id, name, # reviews, # avg 
const getReviews = async (review) => {
    //can have different filters for difference orders
    const { spot_id } = review;
    console.log(spot_id)
    return pool.query (
        `SELECT *
        FROM reviews r
        WHERE spot_id = ($1)`,
        [spot_id]
    );
}

module.exports = {
    createReview,
    getReviews
};