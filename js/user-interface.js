var apiKey = require('./../.env').apiKey;
var GetRepos = require('./../js/user.js').getReposModule;

$(document).ready(function() {
  event.preventDefault();
  $('#search').submit(function() {
    var username = $('#username').val();
    $('#username').val("");
    $('.showUser').text("The user you have chosen is " + username + ".");

    $.get('https://api.github.com/users/' + username + '?access_token=' + 0c260ab5aef36e42d78a2da223831fb5ee777cd0, function(response) {
      console.log(response);
    });
  });
});
