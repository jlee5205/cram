const spotsDB = require('../db/spots.js');

const createSpot = async (req, res) => {
    try {
        const { name, type, cost, has_wifi } = req.body;
        const result = await spotsDB.createSpot({name, type, cost, has_wifi});
        res.status(201).json(result.rows[0]);
    }
    catch (err){
        res.status(500).json({error: err.message});
    }
}

const getSpots = async (req, res) => {
    const result = await spotsDB.getSpots();
    res.json(result.rows);
};

const getSpotById = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await spotsDB.getSpotById({id});
        res.status(201).json(result.rows[0]);
    }
    catch (err){
        res.status(500).json({error: err.message});
    }

}

module.exports = {
    createSpot,
    getSpots,
    getSpotById
};