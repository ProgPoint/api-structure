var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    firstName:{type: String},
    lastName:{type: String},
    email:{type:String},
    password:{type:String}
},{
    collection:'users',
    versionKey: false
});

mongoose.model('User', UserSchema);
var User = mongoose.models.User;
GLOBAL.User = User;

// This method adds new user
User.AddUser = function(postData, callback){
    var user = new User(postData);
    user.save(function(err, result){
        if(err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
};

User.UserList = function(callback) {
    User.find({}, function(err, result) {
        if(err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
}