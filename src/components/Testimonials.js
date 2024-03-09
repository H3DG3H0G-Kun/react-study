import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';


import 'swiper/css';

const TestimonialCardContainer = styled.div`
  text-align: center;
  border: 2px solid black;
  padding: 15px; // Reduced padding
  margin: 5px; // Reduced margin
  box-sizing: border-box;
`;



const TestimonialCard = ({ testimonial }) => (
  <div style={{ textAlign: 'center' }}>
    <img src={testimonial.avatar} alt="Avatar" style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: '20px' }} />
    <p>{testimonial.content}</p>
    <h6>{testimonial.name}</h6>
    <span>{testimonial.position}</span>
  </div>
);

const TestimonialsSwiper = () => {
  const testimonials = [
    { name: "John Doe First", position: "CEO at pxdraft", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", avatar: "https://boston-react.vercel.app/assets/img/avatar-1.jpg" },
    { name: "John Doe Second", position: "CEO at pxdraft", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", avatar: "https://boston-react.vercel.app/assets/img/avatar-2.jpg" },
    { name: "John Doe Third", position: "CEO at pxdraft", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", avatar: "https://boston-react.vercel.app/assets/img/avatar-3.jpg" },
    { name: "John Doe Fourth", position: "CEO at pxdraft", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", avatar: "https://boston-react.vercel.app/assets/img/avatar-4.jpg" },
  ];

  return (
    <Swiper
    modules={[Autoplay]}
    spaceBetween={20}
    slidesPerView={3}
    breakpoints={{
        1024: {
            slidesPerView: 3
        },
        720: {
        slidesPerView: 2
        },
        520: {
        slidesPerView: 1
        },
      }}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCardContainer><TestimonialCard testimonial={testimonial} /></TestimonialCardContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSwiper;
