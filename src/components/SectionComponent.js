import React from 'react';
import { Section } from './Section';
import { Container } from './Container';
import { TextContainer } from './TextContainer';
import { Heading } from './Heading';
import { SubHeading } from './SubHeading';
import { ComponentContainer } from './ComponentContainer';



export function SectionComponent({ color, title, subtitle, ContentComponent }) {
  return (
    <Section bgcolor={color}>
      <Container>
        <TextContainer>
          <Heading>{title}</Heading>
          <SubHeading>{subtitle}</SubHeading>
        </TextContainer>
        <ComponentContainer>
          <ContentComponent />
        </ComponentContainer>
      </Container>
    </Section>
  );
}