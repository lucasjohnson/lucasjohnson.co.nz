import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const SiteMetadata = ({ data }) => {

  const { headerTitle } = data.site.siteMetadata;

  return (
    <header className="Header siteAccent">
      <nav className="container">
        <Link className="left siteHeader" to="/" title={headerTitle}>{headerTitle}</Link>
        <Link className="right" to="/contact">Say Hello</Link>
      </nav>
    </header>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query = {graphql`
        query {
          site {
            siteMetadata {
              headerTitle
            }
          }
        }
      `}
      render = { data => <SiteMetadata data={data} /> }
    />
  )
}

export default Header;
