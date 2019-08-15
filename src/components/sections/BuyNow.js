import React from 'react';

import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { Section } from '../../components/globalSectionContainer';
import CollectionPage from '../collection/collection.component';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        bgr: file(relativePath: { eq: "Buynowbgr.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        threedimg: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tumbnail3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.bgr.childImageSharp.fluid;
      return (
        <Section id="buynow">
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <Grid>
              <ScrollAnimation
                animateIn="flipInY"
                animateOut="flipOutY"
                style={{ gridArea: 'heder', color: 'white' }}
              >
                <h1>Купи сега</h1>
              </ScrollAnimation>

              <Img
                style={{ gridArea: 'img' }}
                fluid={data.threedimg.childImageSharp.fluid}
                alt="youtubemocap"
              />
              <div
                style={{
                  width: '100%',
                  gridArea: 'text',
                }}
              >
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p
                    style={{
                      width: '100%',
                      color: 'white',
                      textColor: 'white',
                    }}
                  >
                    Слушалките са съвместими както с Android така и IOS
                    операционни системи. А също така и с вички други blutooth
                    предаващи устроиства. В конплекта са включени 2 безжични
                    слушалки, зарядна станция (кутийка) и кабел за зареждане на
                    кутийката от тип (micro usb).
                  </p>
                </ScrollAnimation>
                <CollectionPage />
              </div>
            </Grid>
          </BackgroundImage>
        </Section>
      );
    }}
  />
);

const Grid = styled.div`
  text-align: center;
  margin: auto;
  width: 100%;
  padding: 80px;
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 2fr 1fr 2fr;
  grid-row-gap: 100px;

  grid-template-areas:
    'heder heder heder'
    'img blank text';
`;

export default BackgroundSection;
