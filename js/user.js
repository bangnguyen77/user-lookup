var apiKey = require('./../.env').apiKey;
User = function(username) {
  this.username = username;
};

User.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $('#showProfile').append('<h3>' + 'Repository name: ' + response[i].name + '</h3><p>' + response[i].description + ' <a target="_blank" href="' + response[i].html_url + '"><br> <h4> Repository Link </h4> </a></p>');
    }
  }).fail(function(error){
    $("#showProfile").append("<p>The username doesn't exist in the database</p>");
  });
};

exports.userModule = User;
