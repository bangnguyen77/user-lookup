var apiKey = require('./../.env').apiKey;
User = function(username) {
  this.username = username;
};

User.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repository) {
      $("#showProfile").append("<p>respository name: " + repository.name + "<br>respository description: " + repository.description + "</p>");

    });
  }).fail(function(error){
    $("#showProfile").append("<p>The username doesn't exist in the database</p>");
  });
};

exports.userModule = User;
