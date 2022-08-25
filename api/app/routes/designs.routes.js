module.exports = (app) => {
    const designs = require('../controllers/designs.controller.js');

    // get all 
    // get one by id
    // get designs that a user created
    // get designs that a user 'likes'
    app.get("/api/designs/", designs.getAllDesigns)
    app.get("/api/designs/:id", designs.getDesignById)
    app.get("/api/designs/user/:id", designs.getDesignsByUser)
    app.get("/api/designs/user/:id/likes", designs.getDesignsUserLikes)

    // create new one
    app.post("/api/designs", designs.createNewDesign)

    // update <- not really
    app.put("/api/designs", designs.updateDesign)

    // delete one by id
    app.delete("/api/designs/:id", designs.deleteDesignById)
}