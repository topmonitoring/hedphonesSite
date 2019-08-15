import React from 'react';
import { Slide } from 'react-slideshow-image';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SlideShow = () => (
  <StaticQuery
    query={graphql`
      query {
        slide1: file(
          sourceInstanceName: { eq: "slides" }
          name: { eq: "slide1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1366, maxHeight: 650) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        slide2: file(
          sourceInstanceName: { eq: "slides" }
          name: { eq: "slide2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1366, maxHeight: 650) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        slide3: file(
          sourceInstanceName: { eq: "slides" }
          name: { eq: "slide3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1366, maxHeight: 650) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Slide {...properties}>
        <div className="slide1">
          <Img fluid={data.slide1.childImageSharp.fluid} />
        </div>
        <div className="slide2">
          <Img fluid={data.slide2.childImageSharp.fluid} />
        </div>
        <div className="slide3">
          <Img fluid={data.slide3.childImageSharp.fluid} />
        </div>
      </Slide>
    )}
  />
);

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

export default SlideShow;
