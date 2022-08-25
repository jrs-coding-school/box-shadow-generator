const db = require('../index');
const { v4: uuid } = require('uuid');

// get all 
exports.getAllDesigns = (req, res) => {

    let script  = `
        SELECT  *
        FROM designs
    `

    db.query(script, (error, results)=>{

        if (error) {
            res.status(500).send({
                message: 'There was an error getting the designs',
                error
            })
        } else if (results.length == 0) {
            res.status(404).send({
                message: 'No designs found'
            })
        } else {
            res.send(results)
        }
    })
}
// get one by id
exports.getDesignById = (req, res) => {
    res.send("Function not implemented yet :(")
}
// get designs that a user created
exports.getDesignsByUser = (req, res) => {
    res.send("Function not implemented yet :(")
}
// get designs that a user 'likes'
exports.getDesignsUserLikes = (req, res) => {
    res.send("Function not implemented yet :(")
}

// delete one by id
exports.deleteDesignById = (req, res) => {
    res.send("Function not implemented yet :(")
}

// create new one
exports.createNewDesign = (req, res) => {
    res.send("Function not implemented yet :(")
}

// update <- not really
exports.updateDesign = (req, res) => {
    res.send("Function not implemented yet :(")
}