import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (

  <Layout>
    <div className="contentWrapper">
      <h2>404: what you were looking for could not be found</h2>
      <p>Return to the <Link to="/" title="Return to the homepage">homepage</Link></p>
    </div>
  </Layout>
)
