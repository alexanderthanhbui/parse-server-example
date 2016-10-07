var Parse = require('parse/node');
Parse.initialize('blindbox', 'MrFF6pmuI0ibpUheixmd', 'n5e0v9u2DxjkLWPmgQP8');
Parse.serverURL = 'http://blindbox.herokuapp.com/parse/';
Parse.Cloud.useMasterKey();

var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
