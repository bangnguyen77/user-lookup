var apiKey = require('./../.env').apiKey;
User = function(username) {
  this.username = username;
};

User.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + 'repos?access_token=' + apiKey).then(function(response){
    $("#showProfile").append("username.name, " + "username.description");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
