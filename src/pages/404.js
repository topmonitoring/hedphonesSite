import React from 'react';

import Layout from '../components/Layout/Layout';
import { Container } from '../components/globalSectionContainer';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
