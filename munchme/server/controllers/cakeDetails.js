const contentful = require('contentful')

const client = contentful.createClient({ space: '60v12cewnswn', accessToken: 'R0wjyFRPrCgmllgHWNXPWFXFtehzopuJUR9pjm-msjA' })

module.exports = (req, res) => {
    const { id } = req.params
    client.getEntry(id).then(cake => {
        cake.fields.image = "https:" + cake.fields.image.fields.file.url
        cake.fields.id = cake.sys.id
        res.json({ cake: cake.fields })
    }).catch(err => res.status(400).json({ error: 'An error occured while fetching the requested resource' }))
}