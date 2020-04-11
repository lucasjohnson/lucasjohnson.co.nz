import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../templates/ContactForm';

export default () => (

  <Layout>
    <section className="container withPadding withCopy">
      <div className="centered">
        <h1>Contact Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt eros nec luctus accumsan. Morbi elit massa, eleifend et rhoncus quis, sodales id erat.</p>
      </div>
      <ContactForm />
    </section>
  </Layout>
)
