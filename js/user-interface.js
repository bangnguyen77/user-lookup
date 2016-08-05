var apiKey = require('./../.env').apiKey;
var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  $('#search').click(function() {
  
    var username = $('#username').val();
    $('#showProfile').val("");
    var newUser = new User(username);
  });
});
