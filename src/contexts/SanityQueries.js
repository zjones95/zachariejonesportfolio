const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')

const client = sanityClient({
    projectId: 'n9ft6k0h',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: process.env.REACT_APP_SANITY_TOKEN,
    useCdn: true
})

const builder = imageUrlBuilder(client)

export const QueryProjects = async (cb) => {
    const query = '*[_type == "project"]'

    return client.fetch(query).then((project) => {
        return cb(project)
    })
}

export const urlFor = (source) => {
    return builder.image(source)
}