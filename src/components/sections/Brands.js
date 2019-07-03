import React from 'react';
import { Section, Container } from '@components/global';

const Brands = () => (
  <Section id="brands" accent>
    <Container>
      <h1>Как работят?</h1>
      <iframe
        title="How it works"
        width="700"
        height="500"
        src="https://www.youtube.com/embed/lYdzK48a2WE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block', margin: 'auto' }}
      />
    </Container>
  </Section>
);

export default Brands;
