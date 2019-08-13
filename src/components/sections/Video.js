import React from 'react';

import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { Section } from '../../components/globalSectionContainer';
import PopUp from '../ModalPopUp/ModalPopUp';

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
              <h1 style={{ gridArea: 'heder', color: 'white' }}>
                Как работят.?
              </h1>
              <PopUp
                content={
                  <iframe
                    title="youtube-review"
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/7i6enCs52S8"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                }
              >
                <Img
                  style={{ gridArea: 'img' }}
                  fluid={data.youtubemocap.childImageSharp.fluid}
                  alt="youtubemocap"
                />
              </PopUp>

              <p style={{ width: '100%', gridArea: 'text', color: 'black' }}>
                Слушалките са съвместими както с Android така и IOS операционни
                системи. А също така и с вички други blutooth предаващи
                устроиства. В конплекта са включени 2 безжични слушалки, зарядна
                станция (кутийка) и кабел за зареждане на кутийката от тип
                (micro usb).
              </p>
            </Grid>
          </BackgroundImage>
        </Section>
      );
    }}
  />
);
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 920px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const Grid = styled.div`
  text-align: center;
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
`;

export default StyledBackgroundSection;
