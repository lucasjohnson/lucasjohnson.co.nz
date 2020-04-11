import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SkillsData = ({ data }) => {

  const { skillsTitle, skillsDescription } = data.site.siteMetadata;

  return (

    <section>
      {/*
      <div className="container centered withPadding withCopy">
        <h2>{skillsTitle}</h2>
        <p>{skillsDescription}</p>
      </div>
      */}
    </section>
  )
}

const SkillsBanner = () => {
  return (
    <StaticQuery
      query = {graphql`
        query {
          site {
            siteMetadata {
              skillsTitle
              skillsDescription
            }
          }
        }
      `}
      render = { data => <SkillsData data={data} /> }
    />
  )
}

export default SkillsBanner;
