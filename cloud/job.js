var Parse = require('parse/node');
Parse.initialize('blindbox', 'MrFF6pmuI0ibpUheixmd', 'n5e0v9u2DxjkLWPmgQP8');
Parse.serverURL = 'http://blindbox.herokuapp.com/parse/';
Parse.Cloud.useMasterKey();

    var today = new Date();
    var days = 1;
    var time = (days * 24 * 3600 * 1000);
    var expirationDate = new Date(today.getTime() - (time));

var GameScore = Parse.Object.extend("Groups");
var query = new Parse.Query(GameScore);
query.lessThan("createdAt", expirationDate);
query.find({
  success: function(results) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      object.destroy({
        success: function(object) {
          // The object was deleted from the Parse Cloud.
        },
        error: function(object, error) {
          // The delete failed.
          // error is a Parse.Error with an error code and message.
        }
      });
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
