import React from 'react';
import { navigate } from 'gatsby-link';
import { Section } from '@components/global';
import styled from 'styled-components';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
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

  render() {
    return (
      <Section id="contact" accent>
        <form
          name="contact"
          method="post"
          action="/ThankYou/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <FormGrid>
            <h1 style={{ gridArea: 'title' }}>Contact</h1>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
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
                  onChange={this.handleChange}
                  id={'name'}
                  required={true}
                  style={{ gridArea: 'name', width: '100%' }}
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor={'email'}>
                Your e-mail
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'email'}
                  name={'email'}
                  onChange={this.handleChange}
                  id={'email'}
                  required={true}
                  style={{ gridArea: 'email', width: '100%' }}
                />
              </div>
            </div>

            <div
              className="field"
              style={{
                gridArea: 'message',
              }}
            >
              <label className="label" htmlFor={'message'}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={'message'}
                  onChange={this.handleChange}
                  id={'message'}
                  required={true}
                  style={{
                    width: '100%',
                    height: '150px',
                  }}
                />
              </div>
            </div>
            <div className="field" style={{ gridArea: 'button' }}>
              <button className="button is-link" type="submit">
                Send
              </button>
            </div>
          </FormGrid>
        </form>
      </Section>
    );
  }
}
const FormGrid = styled.div`
  text-align: center;
  margin: auto;
  width: 40%;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;

  grid-template-areas:
    'title title'
    'name email'
    'message message'
    'button button';
`;
