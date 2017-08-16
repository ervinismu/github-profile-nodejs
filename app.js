//Problem look github profile
//Solution use nodejs to github api get file 
//info and print out to terminal
// var , let , const
// lebih baik menggunakkan let dan cons
// variabel tetap dengan const
// variabel berubah dengan let unntuk node v 6 keatas

//TODO: Connect Github API [x]
const https = require('https')

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/ervinismu',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}

const request = https.request(options, (result) => {
    console.log('Got response: ', result.statusCode)
})

request.end()

request.on('error', (e) => {
    console.error(e)
})

//TODO: Read the data
//TODO: Parse the data
//TODO: Print the data out