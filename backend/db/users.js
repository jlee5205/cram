const pool = require('./pool');

const createUser = async (user) => {
    const { id, username, email, password } = user;
    return pool.query(
        'INSERT INTO users (id, username, email, password_hash) VALUES ($1, $2, $3, $4)',
        [id, username, email, password]
    );
}

const getUsers = () => {
    return pool.query('SELECT * FROM users ORDER BY id ASC');
}

module.exports = {
    createUser,
    getUsers,
};