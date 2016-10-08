var Parse = require('parse/node').Parse;
Parse.initialize('blindbox', 'n5e0v9u2DxjkLWPmgQP8', 'n5e0v9u2DxjkLWPmgQP8');
Parse.serverURL = 'http://blinbox.herokuapp.com/parse';
Parse.Cloud.useMasterKey();

function saveSomething(){
var obj = new Parse.Object('my_class', 'random');
obj.save(null, {
    success: function(place){
        console.log("Success!!");
    },
    error: function(place, error){
        console.log("Fail: " + error.message);
    }
});
}

function sayHello() {
console.log('Hello');
}

sayHello();
saveSomething();
