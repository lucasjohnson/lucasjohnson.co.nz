import React from 'react';
import NetlifyForm from 'react-netlify-form';

const ContactForm = () => {

  return (
    <section className="Form container withPadding">
      <NetlifyForm name='Contact Form'>
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div>Loading...</div>
            }
            {error &&
              <div>Sorry, but your information was not sent. Please try again later.</div>
            }
            {success &&
              <div>Thank you for contacting me. I will be in touch shortly.</div>
            }
            {!loading && !success &&
              <div>
                <label>Name: <input type="text" name="name" required /></label>
                <label>Email: <input type="text" name="email" required /></label>
                <label>Message: <textarea name="message" required ></textarea></label>
                <button type="submit">Submit</button>
              </div>
            }
          </div>
        )}
      </NetlifyForm>
    </section>
  )
}

export default ContactForm;
