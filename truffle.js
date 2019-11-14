// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
     freight: {
      host: '54.82.25.227',
      port: 8546,
      network_id: '211' 
    }
    
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
  }
    
  }
}
