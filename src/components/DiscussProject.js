import React from 'react';
import styled from 'styled-components';

const DiscussContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  border: 2px solid black;
  background-color: white;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 24px;
`;

const FormDescription = styled.p`
font-weight: 400;
font-size: 18px;
`;

const FormField = styled.div`
  width: 100%; 
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  border: 2px solid transparent;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  font-weight: 600;
  transition: ease all 0.35s;
  cursor: pointer;
  background: #f7af24;
  border-color: #18171c;
  color: #18171c;

  &:hover {
    background-color: #000000;
    color: white;
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 30px; /* Adjust this value to increase the space between inputs */
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;


const DiscussProject = () => {
  return (
    <DiscussContainer>
      <FormContainer>
        <FormTitle>Get in touch</FormTitle>
        <FormDescription>Our friendly team would love to hear from you.</FormDescription>
        <form>
          <InputRow>
            <FormField style={{ flex: 1 }}>
              <Label htmlFor="firstName">First Name *</Label>
              <Input type="text" id="firstName" name="firstName" placeholder="First Name *" />
            </FormField>
            <FormField style={{ flex: 1 }}>
              <Label htmlFor="email">Your Email *</Label>
              <Input type="email" id="email" name="email" placeholder="Your Email *" />
            </FormField>
          </InputRow>
          <FormField>
            <Label htmlFor="subject">Subject *</Label>
            <Input type="text" id="subject" name="subject" placeholder="Subject *" />
          </FormField>
          <FormField>
            <Label htmlFor="message">Your message *</Label>
            <TextArea id="message" name="message" rows={4} placeholder="Your message *"></TextArea>
          </FormField>
          <Button type="submit">Send Message</Button>
        </form>
      </FormContainer>

      <ContactInfoContainer>
        <ContactDetail>
          <span>📞</span>
          <span>+01 123 654 8096</span>
        </ContactDetail>
        <ContactDetail>
          <span>📧</span>
          <span>info@domainname.com</span>
        </ContactDetail>
        <ContactDetail>
          <span>🏠</span>
          <span>Visit My Studio Warnwe Park Streetperrine, FL 33157 New York City</span>
        </ContactDetail>
      </ContactInfoContainer>
    </DiscussContainer>
  );
};

export default DiscussProject;
