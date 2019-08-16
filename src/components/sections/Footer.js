import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from '../../components/globalSectionContainer';
import ExternalLink from '../ExternalLink';
import SocialMediaLinks from '../social-links/SocialMediaLinks';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(sourceInstanceName: { eq: "art" }, name: { eq: "fast" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: 10 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>Audiotechnika</h2>
              <span>
                Последвайте ни в социялните мрежи
                {` `}
                <ExternalLink href="https://twitter.com/audiotechnika">
                  @Audiotechnika
                </ExternalLink>
              </span>
            </Copyright>
            <SocialMediaLinks />
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
