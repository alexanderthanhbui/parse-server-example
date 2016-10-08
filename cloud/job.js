var Parse = require('parse/node').Parse;
Parse.initialize('blindbox', 'n5e0v9u2DxjkLWPmgQP8', 'n5e0v9u2DxjkLWPmgQP8');
Parse.serverURL = 'http://blinbox.herokuapp.com/parse';
Parse.Cloud.useMasterKey();

function saveSomething(){
var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save(null,{useMasterKey: true});
}

function sayHello() {
console.log('Hello');
}

sayHello();
saveSomething();
