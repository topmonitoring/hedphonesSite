import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';
import BuyNow from '@sections/BuyNow';
import Video from '@sections/Video';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Video />
    <Team />
    <BuyNow />
    <Faq />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
