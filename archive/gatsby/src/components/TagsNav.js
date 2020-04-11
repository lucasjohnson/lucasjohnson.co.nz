import React from 'react';
import { Link } from 'gatsby';

const TagsNav = ({ tags }) => {
  return (
    <span className="TagNav">
      {
        tags.map((tag, index) => {
          return (
            <span key={index}>
              <Link to={`/tags/${tag}`} title={tag}>
                {tag}
              </Link>&nbsp;
            </span>
          )
        })
      }
    </span>
  )
}

export default TagsNav;
