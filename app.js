let profile = require('./profile.js')

let profiles = process.argv.slice(2)
profiles.map(user => profile.get(user))

