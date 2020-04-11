import React from 'react';
import { Link } from 'gatsby';

const ContactBanner = () => {

  return (

    <section className="container centered">
      <div className="contactWrapper">
        <div className="contactItem">
          <h3 className="contactTitle">Interested in working together?</h3>
        </div>
        <div className="contactItem">
          <p className="contactCopy">I’ll buy the coffee.</p>
        </div>
        <div className="contactItem">
          <Link className="" to="/contact" title="">Let's Talk</Link>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner;
