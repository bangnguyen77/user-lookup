var apiKey = require('./../.env').apiKey;
var User = require('./../js/user.js').userModule;

$(document).ready(function(event) {
  $('#search').click(function() {
    event.preventDefault();
    var username = $('#username').val();
    $('#showProfile').val("");
    var newUser = new User(username);
    newUser.getRepos(newUser.username);
  });
});
