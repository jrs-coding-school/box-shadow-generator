const db = require('../index');
const { v4: uuid } = require('uuid');

// get all 
exports.getAllDesigns = (req, res) => {

    let script = `
        SELECT  *
        FROM designs
    `

    db.query(script, (error, results) => {

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

    let { id } = req.params;

    const query = `
        SELECT * FROM designs
        WHERE id = ?;
    `;

    let pvalues = [id];

    db.query(query, pvalues, (err, results) => {
        if (err) {
            res.status(500).send({
                error: err,
                message: "There was an error getting your design."
            });
            return;
        } else if (results.length == 0) {
            res.status(404).send({
                message: "Could not locate a design with this id."
            })
            return;
        } else {
            res.send(results[0]);
            return;
        }
    });
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
    // looking for x, y, blur, grow, inset, opacity, color from client
    var { x, y, blur, grow, inset, opacity, color } = req.body;
    console.log(typeof x)
    if ((typeof x != 'number')
        || (typeof y != 'number')
        || (typeof grow != 'number')
        || (typeof inset != 'boolean')
        || (typeof blur != 'number' || blur < 0)
        || (typeof opacity != 'number' || opacity < 0)
        || (typeof color != 'string' || color.length != 7)) {
        res.status(400).send({
            message: "You are missing required data",
            body: req.body
        })
        return;
    }
    // generate an id 
    const id = uuid();

    let script = `
            INSERT INTO designs
                (id, x, y, blur, grow, inset, opacity, color)
            VALUES
                (?, ?, ?, ?, ?, ?, ?, ?)
    `

    let pValues = [id, x, y, blur, grow, inset, opacity, color]

    db.query(script, pValues, (err, results) => {
        if (err) {
            res.status(500).send({
                message: 'There was a problem creating your design',
                err
            })
        } else {
            res.send({
                message: 'Your design was saved in the database',
                id
            })
        }
    })
}

// update <- not really
exports.updateDesign = (req, res) => {
    res.send("Function not implemented yet :(")
}

