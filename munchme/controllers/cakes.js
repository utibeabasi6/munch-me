const contentful = require('contentful')

const client = contentful.createClient({ space: '60v12cewnswn', accessToken: 'R0wjyFRPrCgmllgHWNXPWFXFtehzopuJUR9pjm-msjA' })

module.exports = (req, res) => {
    client.getEntries({ 'content_type': 'cake' }).then(json => {
        const { total } = json
        const cakes = json.items.map(cake => {
            cake.fields.id = cake.sys.id
            return cake.fields
        });
        cakes.forEach(cake => {
            const img = "https:" + cake.image.fields.file.url
            cake.image = img
        })
        res.json({ total, cakes })
    }).catch(err => res.status(400).json({ error: "An error occured while fetching cakes" }))
}