import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const HeroData = ({ data }) => {

  const { tagline, description, skillsTitle, skillsDescription } = data.site.siteMetadata;

  return (

    <section>
      <div className="container centered withPadding">
        <h1>{tagline}</h1>
        <p>{description}</p>
      </div>
      {/*
      <div className="container centered withPadding withCopy">
        <h2>{skillsTitle}</h2>
        <p>{skillsDescription}</p>
      </div>
      */}
    </section>
  )
}

const HeroBanner = () => {
  return (
    <StaticQuery
      query = {graphql`
        query {
          site {
            siteMetadata {
              tagline
              description
              skillsTitle
              skillsDescription
            }
          }
        }
      `}
      render = { data => <HeroData data={data} /> }
    />
  )
}



export default HeroBanner;
