import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ type, url, title, icon, copy }) => {

  ExternalLink.propTypes = {
    type: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    copy: PropTypes.string
  }

  return (
    <a
      className={type && `${type}Item`}
      href={url}
      title={`${title} opens in new tab`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className={icon && `fab fa-${icon}`}>{copy && copy}</span>
    </a>
  )
}

export default ExternalLink;
