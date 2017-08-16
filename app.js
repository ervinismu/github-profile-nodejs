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

// TODO: Read the data [x]
const request = https.request(options, (response) => {
    var body = ''
    response.on('data',(data) => {
        body = body + data
    })
    response.on('end', () => {
        // console.log(typeof body) for check type data body
        // TODO: Parse the data [x]
        // Convert string to JSON
        const profile = JSON.parse(body)
        console.log(profile.avatar_url)
    })


    // TODO: Print the data out
})

request.end()

request.on('error', (e) => {
    console.error(e)
})

