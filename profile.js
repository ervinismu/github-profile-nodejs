//Problem look github profile
//Solution use nodejs to github api get file 
//info and print out to terminal
// var , let , const
// lebih baik menggunakkan let dan cons
// variabel tetap dengan const
// variabel berubah dengan let unntuk node v 6 keatas

//TODO: Connect Github API [x]
const https = require('https')

const get = (username) => {

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: `/users/${username}`,
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}

// TODO: Read the data [x]
const request = https.request(options, (response) => {
    var body = ''
    response.on('data',(data) => {
        body = body + data
    })
    response.on('end', () => {
        // TODO: Parse the data [x]
        // Convert string to JSON
        const profile = JSON.parse(body)
        // = 2x no seeing typeData, only content
        // = 3x seeing typeData
        if (response.statusCode === 200) {
            // console.log(typeof body) for check type data body
            
            // TODO: Print the data out [x]
            // console.log(profile.login + 'ows ' + profile.public)
            console.log(`${profile.login} owns ${profile.public_repos} repo(s).`)
        } else {
            console.log(`Profile with username '${username}' not found!`)
        }
    })
})

request.end()

request.on('error', (e) => {
    console.error(e)
})
}

module.exports = {
    get
}
