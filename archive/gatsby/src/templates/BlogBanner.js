import React from 'react';
import Posts from './Posts';

const BlogBanner = ({ data }) => {

  return (

    <section className="blogBanner">
      {/*
      <div className="container centered withPadding withCopy">
        <h2>What I'm Interested In</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt eros nec luctus accumsan. Morbi elit massa, eleifend et rhoncus quis, sodales id erat.</p>
      </div>
      */}
      <Posts data={data} />
    </section>
  )
}

export default BlogBanner;
