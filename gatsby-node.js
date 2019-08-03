const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog-template.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }
        }
    `)
    // Note: only get here once the GraphQL query is complete
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        // console.log('==== create ', edge.node.slug)
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });
}