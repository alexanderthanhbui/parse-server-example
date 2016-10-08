
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
