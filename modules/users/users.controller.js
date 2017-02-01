'use strict';
var User = global.User;

exports.AddUser = AddUser;
exports.GetUserList = GetUserList;

function AddUser(req, res) {
    var postData = req.body;
    var isValid = true;
    var invalidParams = [];
    if(postData.firstName === undefined || postData.firstName === null || postData.firstName === '') {
        invalidParams.push('firstName');
        isValid = false;
    }
    if(postData.firstName && postData.firstName.trim() === '') {
        invalidParams.push('firstName');
        isValid = false;
    }
    if(postData.lastName === undefined || postData.lastName === null || postData.lastName === '') {
        invalidParams.push('lastName');
        isValid = false;
    }
    if(postData.lastName && postData.lastName.trim() === '') {
        invalidParams.push('lastName');
        isValid = false;
    }
    if(postData.email === undefined || postData.email === null || postData.email === '') {
        invalidParams.push('email');
        isValid = false;
    }
    if(postData.email && postData.email.trim() === '') {
        invalidParams.push('email');
        isValid = false;
    }
    if(postData.password === undefined || postData.password === null || postData.password === '') {
        invalidParams.push('password');
        isValid = false;
    }
    if(postData.password && postData.password.trim() === '') {
        invalidParams.push('password');
        isValid = false;
    }
    if(isValid === false) {
        res.sendError(new Exception('ValidationError',{ parameters:invalidParams.join(',') }));
        return;
    }
    User.findOne({email: postData.email}, function(err, existUser){
        if(existUser !== null && existUser !== undefined) {
            res.sendError(new Exception('DuplicateEntry', {message: 'This email address is associated with other user. Please change the email address.'}));
            return;
        } else {
            User.AddUser(postData, function(err, result){
                if(err) {
                    res.sendError(new Exception('GeneralError'));
                    return;
                } else {
                    res.sendResponse(result);
                }
            });
        }
    });
}

function GetUserList(req, res) {
    User.UserList(function(err, result) {
        if(err) {
            res.sendError(new Exception('GeneralError'));
            return;
        } else {
            res.sendResponse(result);
        }
    });
}