const checkFirstName = (req, res, next) => {
    if(req.body.firstname){
        console.log("firstname is okay")
        // next allows our express middleware to pass the req, and res to the next functons
        next()
    } else {
        // send the res and end the request
        res.status(400).json({ error: "First Name is required!" })
    }
}
const checkLastName = (req, res, next) => {
	if (req.body.lastname) {
		console.log("lastname is okay");
		next();
	} else {
		res.status(400).json({ error: "Last Name is required!" });
	}
};


const checkEmail = (req, res, next) => {
	if (req.body.firstname) {
		console.log("firstname is okay");
		next();
	} else {
		res.status(400).json({ error: "Email is required!" });
	}
};

const checkPassword = (req, res, next) => {
	if (req.body.password) {
		console.log("password is okay");
		next();
	} else {
		res.status(400).json({ error: "First Name is required!" });
	}
};

const checkBoolean = (req, res, next) => {
    // check if we have an is favortie value
    if (req.body.is_favorite === true || req.body.is_favorite === false){
        // if we have value keep going
        next()
    } else{
        // if we dont send an error
        res.status(400).json({ error: "is_favorite must be a boolean value"})
    }
}

module.exports = {
    checkFirstName,
    checkLastName,
    checkEmail,
    checkPassword,
    checkBoolean
}
