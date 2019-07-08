import React from 'react';
import { navigate } from 'gatsby-link';
import { Section, Container } from '@components/global';

const Order = () => (
  <Section id="contact" accent>
    <Container
      style={{
        display: 'block',
        margin: 'auto',
      }}
    >
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={'name'}>
                Your name
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'name'}
                  onChange={handleChange}
                  id={'name'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'email'}>
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'email'}
                  name={'email'}
                  onChange={handleChange}
                  id={'email'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={'message'}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={'message'}
                  onChange={handleChange}
                  id={'message'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <button className="button is-link" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </Section>
);

const handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};

const handleSubmit = e => {
  e.preventDefault();
  const form = e.target;
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...this.state,
    }),
  })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error));
};

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default Order;
