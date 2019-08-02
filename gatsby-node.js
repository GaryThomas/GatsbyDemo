const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type == "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log(JSON.stringify(node, undefined, 4))
        console.log(slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog-template.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                }
            }
          }
        }
      }
    `)
    // Note: only get here once the GraphQL query is complete
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        console.log('==== create ', edge.node.fields.slug)
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    });
}