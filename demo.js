var bravia = require('./lib');
// Accepts two parameters: IP and PSKKey

bravia('100.168.1.100', '0000', function(client) {

  // List available commands
  client.getCommandNames(function(list) {
    console.log(list);
  });

  // Call a command
  client.exec('Netflix');

});
