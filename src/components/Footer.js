import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
`;

const IconContainer = styled.div`
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  font-size: 16px; 
  color: #555;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </SocialLink>
        <SocialLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialLink>
        <SocialLink href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterest} />
        </SocialLink>
      </IconContainer>
      <div>
        © 2024 copyright all right reserved
      </div>
    </FooterContainer>
  );
};

export default Footer;
