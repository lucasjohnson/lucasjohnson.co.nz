import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ExternalLink from './ExternalLink';

const FooterData = ({ data }) => {

  const { title, socialMedia } = data.site.siteMetadata;

  return (
    <footer className="centered siteAccent">
      <div className="container footer">
        <p>{title}</p>
        <ul className="socialItems">
          {socialMedia.map(item => {
            return (
              <li key={item.title}><ExternalLink type={item.type} icon={item.icon} url={item.url} title={item.title} /></li>
            )
          })}
        </ul>
        <p>Built with <ExternalLink url={"https://www.gatsbyjs.org"} title={"GatsbyJS homepage"} copy={"GatsbyJS"} /></p>
      </div>
    </footer>
  )
}

const Footer = () => {
  return (
    <StaticQuery
      query = {graphql`
        query {
          site {
            siteMetadata {
              title
              socialMedia {
                type
                url
                title
                icon
              }
            }
          }
        }
      `}
      render = { data => <FooterData data={data} /> }
    />
  )
}

export default Footer;
