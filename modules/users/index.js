var router = express.Router();

var controller = require('./users.controller');

router.post('/', controller.AddUser); // Add new user
router.get('/', controller.GetUserList); // Get user list

module.exports=function(app){
    app.use('/users', router); // Default route will be added to users module
};