module.exports = {
  siteMetadata: {
    title: `Lucas Johnson | Front-end Web Developer`,
    siteUrl: `https://lucasjohnson.co.nz`,
    image: ``,
    logo: ``,
    headerTitle: `Lucas Johnson`,
    tagline: `Freelance Web Developer`,
    description: `Hello, I am a Freelance Web Developer based in Toronto, Canada with over 3 years of industry experience. I offer a complete range of services including graphic design, web development and hosting, and am proficient in JavaScript (React), CSS, and HTML. Please feel free to contact me to discuss how I can help you with your next project.`,
    skillsTitle: `Technologies I work with`,
    skillsDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt eros nec luctus accumsan. Morbi elit massa, eleifend et rhoncus quis, sodales id erat.`,
    blogTitle: `What I'm interested in`,
    blogDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt eros nec luctus accumsan. Morbi elit massa, eleifend et rhoncus quis, sodales id erat.`,
    author: `Lucas Johnson`,
    contact: `contact@lucasjohnson.co.nz`,
    twitterUsername: `@_lucasjohnson`,
    socialMedia: [
      {
        type: `social`,
        url: `https://github.com/lucasjohnson`,
        title: `GitHub`,
        icon: `github`
      },
      {
        type: `social`,
        url: `https://twitter.com/_lucasjohnson`,
        title: `Twitter`,
        icon: `twitter`
      },
      {
        type: `social`,
        url: `https://www.linkedin.com/in/lucasjohnsonwebdeveloper`,
        title: `LinkedIn`,
        icon: `linkedin-in`
      }
    ]
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas Johnson`,
        short_name: `LJ Web Dev`,
        start_url: `/`,
        background_color: `#ccc`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`
  ]
}
