var request = require('request')
var querystring = require('querystring')

var clwo = function() {
  this.setminify = true
}

clwo.prototype.minify = function(minify) {
  this.setminify = minify
}

clwo.prototype.get = function (api, params, callback) {
  if (!(typeof(params.minify) !== 'undefined')) {
    params.minify = this.setminify
  }
  console.log('https://clwo.eu/jailbreak/api/v1/' + api + "?" + querystring.stringify(params))
  request('https://clwo.eu/jailbreak/api/v1/' + api + "?" + querystring.stringify(params), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body)
      if (body.status == 200) {
        callback(body.data, body.status, body.datainfo, body.message, body.stats)
      } else {
        console.log("Status Code: " + String(body.status))
        callback(false)
      }
    } else {
      callback(false)
      console.log("Status Code: " + String(response.statusCode))
      console.log("Error: " + String(error))
    }
  })
}

clwo.prototype.serverInfo = function(options, callback) { this.get('server/info.php', options, callback) }
clwo.prototype.serverPlayers = function(options, callback) { this.get('server/players.php', options, callback) }
clwo.prototype.serverPing = function(options, callback) { this.get('server/ping.php', options, callback) }
clwo.prototype.serverRules = function(options, callback) { this.get('server/rules.php', options, callback) }

clwo.prototype.admins = function(options, callback) { this.get('admins.php', options, callback) }
clwo.prototype.sourcebans = function(options, callback) { this.get('sourcebans.php', options, callback) }

clwo.prototype.teamlocks = function(options, callback) { this.get('teamlocks.php', options, callback) }
clwo.prototype.teambans = function(options, callback) { this.get('teambans.php', options, callback) }
clwo.prototype.warnings = function(options, callback) { this.get('warnings.php', options, callback) }
clwo.prototype.microphones = function(options, callback) { this.get('microphones.php', options, callback) }

clwo.prototype.accounts = function(options, callback) { this.get('accounts.php', options, callback) }
clwo.prototype.playtime = function(options, callback) { this.get('playtime.php', options, callback) }
clwo.prototype.nicknames = function(options, callback) { this.get('nicknames.php', options, callback) }
clwo.prototype.ip = function(options, callback) { this.get('ip.php', options, callback) }
clwo.prototype.alts = function(options, callback) { this.get('alts.php', options, callback) }

module.exports = new clwo()