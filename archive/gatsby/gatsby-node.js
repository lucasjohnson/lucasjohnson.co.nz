const path = require('path');

exports.createPages = (({ graphql, actions }) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {

    const postTemplate = path.resolve('src/templates/Post.js');

    resolve(
      graphql (
        `
        query {
          allMarkdownRemark (
            sort: { order: ASC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  date(formatString: "MMMM DD, YYYY")
                  title
                  tags
                  excerpt
                }
              }
            }
          }
        }
        `
      ).then(result => {

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }, index) => {

          const path = node.frontmatter.path;

          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index -1].node,
              next: index === (posts.length -1) ? null : posts[index + 1].node
            }
          })

          resolve()
        })
      })
    )
  })
})
