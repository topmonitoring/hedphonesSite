import React from 'react';
import { Slide } from 'react-slideshow-image';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SlideShow = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "slide11" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1366, maxHeight: 650) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "slide22" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1366, maxHeight: 650) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "slide33" }
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
          <Img fluid={data.art_fast.childImageSharp.fluid} />
        </div>
        <div className="slide2">
          <Img fluid={data.art_learn.childImageSharp.fluid} />
        </div>
        <div className="slide3">
          <Img fluid={data.art_ideas.childImageSharp.fluid} />
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
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

export default SlideShow;
