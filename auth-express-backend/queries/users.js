// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require("../db/dbConfig.js");


const getOneUser = async (id) => {
    try {
        const user = await db.one( "SELECT * FROM users WHERE id=$1", id )
        return user
    } catch (error) {
        console.error(error)
    }
};
const getOneUserByEmail = async ( { email } ) =>
{
    try {
        const oneUser = await db.one( 'SELECT * FROM users WHERE email = $1', email )
        return oneUser
    } catch (error) {
        return console.error( error );
    }
    
};
const createUser = async (user) => {
    try {
        const { firstname, lastname, email, password } = user
        const createdUser = await db.one(
            'INSERT INTO users (firstname, lastname, email, password ) VALUES ($1, $2, $3, $4) RETURNING *',
            [ firstname, lastname, email, password ]
        );
        return createdUser
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    getOneUser,
    getOneUserByEmail,
    createUser
}