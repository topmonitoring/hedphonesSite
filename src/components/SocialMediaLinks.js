import ExternalLink from '../components/ExternalLink';

import React from 'react';

const SOCIAL = [
  {
    icon: 'fab fa-facebook',
    link: 'https://github.com/ajayns/gatsby-absurd',
  },
  {
    icon: 'fab fa-instagram',
    link: 'https://instagram.com/ajay_ns',
  },
  {
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/ajayns08',
  },
];

const SocialMediaLinks = () => (
  <div>
    {SOCIAL.map(({ icon, link }) => (
      <ExternalLink href={link} key={icon}>
        <i
          className={icon}
          alt="link"
          style={{
            fontSize: '27px',
            padding: '10px',
            color: 'black',
          }}
        />
      </ExternalLink>
    ))}
  </div>
);
export default SocialMediaLinks;
