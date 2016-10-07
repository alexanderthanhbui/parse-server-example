var Parse = require('parse/node');
Parse.initialize('blindbox', 'MrFF6pmuI0ibpUheixmd', 'n5e0v9u2DxjkLWPmgQP8');
Parse.serverURL = 'http://blindbox.herokuapp.com/parse/';
Parse.Cloud.useMasterKey();

    var today = new Date();
    var days = 1;
    var time = (days * 24 * 3600 * 1000);
    var expirationDate = new Date(today.getTime() - (time));

    var query = new Parse.Query('Groups');
    query.each(function(Groups) {
        return Groups.destroy();
    }).then(function() {
        console.log("Delete job completed.");
        status.success("Delete job completed.");
    }, function(error) {
        alert("Error: " + error.code + " " + error.message);
        status.error("Error: " + error.code + " " + error.message);
    });
