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