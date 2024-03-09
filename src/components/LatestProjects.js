import React from 'react'; 
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 28%; 
  height: 350px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border: 2px solid black;

  @media (max-width: 1024px) {
    width: 48%; /* 2 columns layout */
  }

  @media (max-width: 768px) {
    width: 100%; /* 1 column layout */
  }
`;

const ImageContainer = styled.div`
  height: 75%;
  background-size: cover;
  background-position: center;
`;

const InfoContainer = styled.div`
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-top: 2px solid black
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h6`
  margin-bottom: 0.5em; 
  flex-shrink: 0; 
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

const Description = styled.span`
  flex-shrink: 1; 
  margin: 0;
  padding: 0;
`;

const PortfolioLink = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  color: #fff; 
  background-color: #5c64cf; 
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; 
  height: 40px; 
`;


const PortfolioCard = ({ imageSrc, title, description, link }) => (
  <Card>
    <ImageContainer style={{ backgroundImage: `url(${imageSrc})` }} />
    <InfoContainer>
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
      <PortfolioLink href={link}>  
        <IconWrapper>
          <FontAwesomeIcon icon={faArrowRight} />
        </IconWrapper>
      </PortfolioLink>
    </InfoContainer>
  </Card>
);

export const LatestProjects = () => (
  <CardContainer>
    <PortfolioCard
      imageSrc="https://boston-react.vercel.app/assets/img/project-1.jpg"
      title="Agency Landing page"
      description="Web/WordPress"
      link="#"
    />
    <PortfolioCard
      imageSrc="https://boston-react.vercel.app/assets/img/project-2.jpg"
      title="Agency Landing page"
      description="Web/WordPress"
      link="#"
    />
    <PortfolioCard
      imageSrc="https://boston-react.vercel.app/assets/img/project-3.jpg"
      title="Agency Landing page"
      description="Web/WordPress"
      link="#"
    />
    <PortfolioCard
      imageSrc="https://boston-react.vercel.app/assets/img/project-4.jpg"
      title="Agency Landing page"
      description="Web/WordPress"
      link="#"
    />
    <PortfolioCard
      imageSrc="https://boston-react.vercel.app/assets/img/project-5.jpg"
      title="Agency Landing page"
      description="Web/WordPress"
      link="#"
    />
    <PortfolioCard
      imageSrc="https://boston-react.vercel.app/assets/img/project-6.jpg"
      title="Agency Landing page"
      description="Web/WordPress"
      link="#"
    />
  </CardContainer>
);
