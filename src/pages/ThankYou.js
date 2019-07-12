import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Footer from '@sections/Footer';
import styled from 'styled-components';

const ThankYouPage = () => (
  <Layout>
    <Center>
      <h1>Thank you!</h1>
      <p>This is a custom thank you page for form submissions</p>
      <Link to="/">Go back to the homepage</Link>
    </Center>
    <Footer />
  </Layout>
);

export default ThankYouPage;

const Center = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
  padding: 10px;
`;
