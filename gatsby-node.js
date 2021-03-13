const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions }) => {
  console.log(`*** I am processing a node with type: ${node.internal.type}`)
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // console.log(JSON.stringify(node, undefined, 4))
    const slug = node.frontmatter.path
    console.log(slug)
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
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
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
