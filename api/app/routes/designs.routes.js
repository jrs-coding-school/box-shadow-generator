module.exports = (app) => {
    const designs = require('../controllers/designs.controller.js');

    // get all 
    // get one by id
    // get designs that a user created
    // get designs that a user 'likes'
    app.get("/api/designs/", designs.getAllDesigns)
    app.get("/api/designs/:id", designs.foo)
    app.get("/api/designs/user/:id", designs.foo)
    app.get("/api/designs/user/:id/likes", designs.foo)

    // create new one
    app.post("/api/designs", designs.foo)

    // update <- not really
    app.put("/api/designs", designs.foo)

    // delete one by id
    app.put("/api/designs/:id", designs.foo)
}