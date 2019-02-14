const
create = require("../handlers/create_person"),
edit = require("../handlers/update_person"),
eliminate = require("../handlers/delete_person"),
display = require("../handlers/show_people");
module.exports = (express)=> {
    const api = express.Router();
   // console.log("checking");
    api.post("/create_person" , create.create_pupil);
    api.get("/display_people" , display.show_pupil);
    api.put("/update_person" , edit.update_person);
    api.delete("/delete_person" , eliminate.remove_person);
    api.get('/me', (req, res, next)=> {
        res.json({
            success: true, 
            status: "200",
            message: 'this is testing response'
        });
    });     
   return api;
}