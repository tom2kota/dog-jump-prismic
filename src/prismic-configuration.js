import Prismic from 'prismic-javascript'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = 'https://tom2kota.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, {accessToken})


// -- Link resolution rules - https://prismic.io/docs/reactjs/beyond-the-api/link-resolving
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
    // URL for a category type
    if (doc.type === 'blog') {
        return `/post/${doc.uid}`
    }
    if (doc.type === 'category') {
        return `/category/${doc.uid}`
    }
    // URL for a product type
    if (doc.type === 'product') {
        return `/product/${doc.uid}`
    }
    // URL for a page type
    if (doc.type === 'page') {
        return `/${doc.uid}`
    }
    // Backup for all other types
    return '/'
}
