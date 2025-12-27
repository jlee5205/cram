const crypto = require('crypto');
const usersDB = require('../db/users.js');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const id = crypto.randomUUID();
        const result = await usersDB.createUser({id, username, email, password});
        res.status(201).json(result.rows[0]);
    }
    catch (err){
        res.status(500).json({error: err.message});
    }
}

const getUsers = async (req, res) => {
    const result = await usersDB.getUsers();
    res.json(result.rows);
  };

module.exports = {
    createUser,
    getUsers,
};