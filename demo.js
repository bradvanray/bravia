var bravia = require('./lib');
// Accepts two parameters: IP and PSKKey

bravia('10.163.1.151', '121784', function(client) {

  // List available commands
  client.getCommandNames(function(list) {
    console.log(list);
  });

  // Call a command
  client.exec('Netflix');

});
