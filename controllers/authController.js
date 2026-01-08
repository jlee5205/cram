const crypto = require('crypto');
const authDB = require('../db/auth.js');

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        return res.status(400).json( {message: "All fields required"});
    }

    try {
        const user = await authDB.createUser({
            id : crypto.randomUUID(),
            username,
            email,
            password
        });
        res.status(200).json(user);
    } catch (err) {
        console.log( "Failed to sign up user", err);
        res.status(500).json({ message: "Server error" });
    }
}

// TODO: login prob shouldn't return the password
const login = async (req, res) => {
    const { email, password } = req.body;
    console.log("Received login attempt:", email, password);
    if( !email || !password){
        return res.status(400).json( {message: "All fields required"}); 
    }
    try {
        const result = await authDB.loginUser({
            email,
            password,               
        });

        //if theres nothing in DB
        if (result.rows.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        //TODO: validate the password
        console.log(" i am here");
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log( "Failed to login up user", err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    signup,
    login,
}