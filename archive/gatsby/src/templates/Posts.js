import React from 'react';
import { Link } from 'gatsby';

const Posts = ({ data }) => {

  const { edges } = data.allMarkdownRemark;

  return (

      <section className="container postWrapper">

        {edges.map(edge => {

          const { frontmatter } = edge.node;

          return (

            <Link className="post centered" to={frontmatter.path} title={frontmatter.title} key={frontmatter.path}>
              <img className="" src={frontmatter.thumbImage.publicURL} alt={frontmatter.title} />
              <div className="postCopy">
                <h3 className="postTitle">{frontmatter.title}</h3>
                <p className="postExcerpt">{frontmatter.excerpt}</p>
              </div>
            </Link>
          )
        })}

    </section>
  )
}

export default Posts;
