import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import HeroBanner from '../templates/HeroBanner';
import BlogBanner from '../templates/BlogBanner';
import ContactBanner from '../templates/ContactBanner';


export default ({ data, children }) => {
  return (
    <Layout>
      <SEO />
      <HeroBanner />
      <BlogBanner data={data} />
      <ContactBanner />
    </Layout>
  )
}

export const query = graphql`
  query posts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            excerpt
            thumbImage {
              publicURL
            }
          }
        }
      }
    }
  }
`
