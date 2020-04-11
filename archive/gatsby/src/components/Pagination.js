import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ prev, next }) => {
  return (
    <nav className="pagination">
      <ul className="paginationItems">
        {
          prev &&
            <li className="paginationItem prev">
              <Link className="paginationLink" to={prev.frontmatter.path}>
                &laquo; {prev.frontmatter.title}
              </Link>
            </li>
        }
        {
          next &&
          <li className="paginationItem next">
            <Link className="paginationLink" to={next.frontmatter.path}>
              {next.frontmatter.title} &raquo;
            </Link>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Pagination;
