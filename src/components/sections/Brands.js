import React from 'react';
import { Section, Container } from '@components/global';

const Video = () => (
  <Section id="video" accent>
    <Container
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <iframe
        title="How it works"
        src="https://www.youtube.com/embed/lYdzK48a2WE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          display: 'block',
          margin: 'auto',
          top: '0',
          left: '0',
          width: '100%',
          height: '500px',
          border: '0',
        }}
      />
    </Container>
  </Section>
);

export default Video;
