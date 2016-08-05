function GetRepo() {

}

exports.getRepos = function(){
  $.get('https://api.github.com/users/bangnguyen77?access_token=' + 0c260ab5aef36e42d78a2da223831fb5ee777cd0).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.getReposModule = GetRepos;
