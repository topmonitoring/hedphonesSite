import React from 'react';

import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar';

import Header from '../components/sections/Header';
import About from '../components/sections/About';
import WhyToBuy from '../components/sections/WhyToBuy';
import Faq from '../components/sections/Faq';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import BuyNow from '../components/sections/BuyNow';
import Video from '../components/sections/Video';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Video />
    <WhyToBuy />
    <BuyNow />
    <Faq />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
