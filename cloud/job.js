
var Parse = require('parse/node');
Parse.initialize('blindbox', 'MrFF6pmuI0ibpUheixmd', 'n5e0v9u2DxjkLWPmgQP8');
Parse.serverURL = 'http://blindbox.herokuapp.com/parse/';
Parse.Cloud.useMasterKey();

Parse.Cloud.job('deleteOldPosts', function(request, status) {

    var today = new Date();
    var days = 1;
    var time = (days * 24 * 3600 * 1000);
    var expirationDate = new Date(today.getTime() - (time));

    var query = new Parse.Query('Groups');
        // All posts have more than 1 day
        query.lessThan('createdAt', expirationDate);

        query.find().then(function (posts) {
            Parse.Object.destroyAll(posts, {
                success: function() {
                    status.success('All posts are removed.');
                },
                error: function(error) {
                    status.error('Error, posts are not removed.');
                }
            });
        }, function (error) {});

});
