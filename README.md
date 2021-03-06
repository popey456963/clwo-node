# CLWO Node Wrapper

```javascript
var clwo = require('clwo')

# Turn on/off minifying requests (default: true)
clwo.minify(true)
clwo.minify(false)

# Get a custom endpoint
clwo.get('server/custom.php', {}, function(data){ console.log(data) })

# Get a built-in endpoint
clwo.serverInfo({}, function(data) { console.log(data) })

# Give custom object parameters
clwo.admins({ parent: "*" }, function(data) { console.log(data) })

# Get all the data from the endpoint
clwo.ip({ key: "*", value: "*", minify: false}, function(data, status, datainfo, message, stats) { // All the return values })
```

Includes the following endpoints:

- serverInfo (server/info.php)
- serverPlayers (server/players.php)
- serverPing (server/ping.php)
- serverRules (server/rules.php)

- admins (admins.php)
- sourcebans (sourcebans.php)

- teamlocks (teamlocks.php)
- teambans (teambans.php)
- warnings (warnings.php)
- microphones (microphones.php)

- accounts (acccounts.php)
- playtime (playtime.php)
- nicknames (nicknames.php)
- ip (ip.php)
- alts (alts.php)