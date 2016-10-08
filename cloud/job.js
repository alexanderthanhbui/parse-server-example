
var Parse = require('parse/node');
Parse.initialize('blindbox', 'MrFF6pmuI0ibpUheixmd', 'n5e0v9u2DxjkLWPmgQP8');
Parse.serverURL = 'http://blindbox.herokuapp.com/parse';
Parse.Cloud.useMasterKey();

function saveSomething(){
var MyClass = Parse.Object.extend("MyClass");
var myclass = new MyClass();
myclass.set("columnName", "value");
myclass.save({
    success: function(place){
        console.log("Success!!");
    },
    error: function(place, error){
        console.log("Fail: " + error.message);
    }
});
useMasterKey: true
}

saveSomething();
