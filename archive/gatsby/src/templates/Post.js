import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import TagsNav from '../components/TagsNav';
import Pagination from '../components/Pagination';
import ContactBanner from './ContactBanner';

const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data;
  const { path, date, title, tags, excerpt, bannerImage } = markdownRemark.frontmatter;
  const html = markdownRemark.html;

  const { prev, next } = pageContext;

  return (
    <Layout>
      <SEO
        pathname={path}
        title={title}
        description={excerpt || 'nothin’'}
        article
      />
    <article className="Post container">
        <header className="postHeader">
          <p className="postDate">{date} / <TagsNav tags={tags} /></p>
          <h1 className="postTitle">{title}</h1>
        </header>
        <div className="postContent">
          <div className="brew">
            <img src={bannerImage.publicURL} alt=""/>
            <img src={bannerImage.publicURL} alt=""/>
            <img src={bannerImage.publicURL} alt=""/>
          </div>
          {/*{ bannerImage && <img src={bannerImage.publicURL} title={`${title} banner image`} /> }*/}
          <div className="contentWrapper">
            <p className="postExcerpt">{excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <Pagination prev={prev} next={next} />
      </article>
      <ContactBanner />
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        excerpt
        bannerImage {
          publicURL
        }
      }
    }
  }
`

export default Post;
