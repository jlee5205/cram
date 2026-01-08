const pool = require('./pool');

const createUser = async (user) => {
    const { id, username, email, password } = user;
    return pool.query(
        'INSERT INTO users (id, username, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING *',
        [id, username, email, password]
    );
}

const loginUser = async (user) => {
    const { email, password } = user;
    console.log("in db");
    console.log(email, password);
    return pool.query(
        `SELECT id, username, email, password_hash 
        FROM users u
        WHERE email = $1`,
        [email]
    );
}

module.exports = {
    createUser,
    loginUser
};