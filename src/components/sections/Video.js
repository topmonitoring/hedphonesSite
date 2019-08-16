import React from 'react';

import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { Section } from '../../components/globalSectionContainer';
import PopUp from '../ModalPopUp/ModalPopUp';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { ReactComponent as YtubePlayButton } from '../../assets/youtube-playButon-logo.svg';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        bgr: file(relativePath: { eq: "videoBgr.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        youtubemocap: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "youtubemocap" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
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
        <Section id="video" style={{ margin: 'auto', display: 'block' }}>
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
                style={{
                  gridArea: 'heder',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <h1>Как работят.?</h1>
              </ScrollAnimation>
              <PopUp
                content={
                  <iframe
                    title="youtube-review"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/7i6enCs52S8"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                }
              >
                <div style={{ gridArea: 'img', alignContent: 'center' }}>
                  <StyledGatsbyImg
                    fluid={data.youtubemocap.childImageSharp.fluid}
                    alt="youtubemocap"
                  ></StyledGatsbyImg>
                  <YtubePlayButton
                    style={{
                      margin: 'auto',
                      width: 'auto',
                      height: 'auto',
                      position: 'absolute',
                      display: 'block',
                      left: '0',
                      top: '0',
                      fill: 'red',
                    }}
                  />
                </div>
              </PopUp>
              <ScrollAnimation
                animateIn="fadeIn"
                style={{ width: '100%', gridArea: 'text', color: 'black' }}
              >
                <p>
                  Слушалките са съвместими както с Android така и IOS
                  операционни системи. А също така и с вички други blutooth
                  предаващи устроиства. В конплекта са включени 2 безжични
                  слушалки, зарядна станция (кутийка) и кабел за зареждане на
                  кутийката от тип (micro usb).
                </p>
              </ScrollAnimation>
            </Grid>
          </BackgroundImage>
        </Section>
      );
    }}
  />
);

const StyledGatsbyImg = styled(Img)`
  position: relative;
  top: 0;
  left: 0;
  &:hover {
    opacity: 0.9;
  }
`;

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 920px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  @media screen and (max-width: 800px) {
    height: 700px;
  }
`;

const Grid = styled.div`
  text-align: left;
  margin: auto;
  width: 100%;
  padding: 80px;
  display: grid;
  grid-gap: 150px;
  grid-template-columns: 2fr 1fr;
  grid-row-gap: 100px;

  grid-template-areas:
    'heder  heder'
    'img  text';

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'heder '
      'img '
      'text';
    grid-gap: 50px;
    padding: 10px;
  }
`;

export default StyledBackgroundSection;
