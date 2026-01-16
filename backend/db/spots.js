const pool = require('./pool');

const createSpot = async (spot) => {
    const { name, type, cost, has_wifi } = spot;
    return pool.query(
        'INSERT INTO spots (name, type, cost, has_wifi) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, type, cost, has_wifi]
    );
}

const deleteSpot = async (spot) => {
    const { id } = spot;
    return pool.query(
        'DELETE FROM spots WHERE id = $1 RETURNING *',
        [id]
    );
}

//return id, name, # reviews, # avg 
const getSpots = async () => {
    //can have different filters for difference orders
    return pool.query (
        `SELECT 
            s.id,
            s.name,
            s.type,
            s.cost,
            s.has_wifi,
            COUNT(r.id) as review_count,
            COALESCE(AVG(r.rating), 0) as avg_rating 
        FROM spots s
        LEFT JOIN reviews r ON r.spot_id = s.id
        GROUP BY s.id, s.name
        ORDER BY avg_rating DESC;`
    )
}

//return everything in row
const getSpotById = async (spot) => {
    const { id } = spot;
    return pool.query('SELECT * FROM spots WHERE id = $1', [id]);
}

module.exports = {
    createSpot,
    deleteSpot,
    getSpots,
    getSpotById
};