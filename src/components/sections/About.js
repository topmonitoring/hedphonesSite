import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '../../components/globalSectionContainer';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "pic2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "pic3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>
                Чудесен звук чрез V4.2 Bluetooth връзка с ниска консумация на
                енергия.{' '}
              </h2>
              <p>
                Слушалките създават 360 градусово качествено стерео звуково
                усещане. Оборудвани с 950mAh powerbank преносима станция за
                зареждане, слушалките могат да бъдат зареждани до 4 пъти, преди
                зарядът на кутийката да се изчерпа. Много добро съотношение цена
                - качество.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Ергономичен дизайн</h2>
              <p>
                Компактен и много лек дизайн, минимално натоварване за
                ушите.Ергономичен дизайн, държи слушалките добре закрепени за
                ушите и не им позволява да паднат докато спортувате.Вграден
                микрофон, позволява провеждане на хендсфри разговори.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Удобни и конпактни</h2>
              <p>
                Позволява на двама души да слушат едновременно същата песен, без
                да ги ограничават жици. Двойно натискане на бутона за
                пренабиране на изходящо обаждане или смяна на песен, единично
                натискане за пауза на песента или отговор или затваряне на
                обаждане.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
