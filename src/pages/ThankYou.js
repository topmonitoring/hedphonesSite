import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Footer from '../components/sections/Footer';
import styled from 'styled-components';

const ThankYouPage = () => (
  <Layout>
    <Center>
      <h1>Благодарим ви!</h1>
      <p>Заявката ви беше изпратена успешно</p>
      <Link to="/">Обратно към началната страница</Link>
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
