import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/robert-anderson8',
      name: 'Robert Anderson',
      role: 'Full Stack Instructor | Web and Software Development',
      test: 'As a developer and a problem solver, I think Najib is a great collaborative partner to have. I met Najib in generation USA program and since then, he has drastically progressed in him understanding of the development process.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/lazaroalsina/',
      name: 'Lazaro Alsina',
      role: 'Master Instructor & Digital Curriculum Designer for Software',
      test: "It was a pleasure collaborating with Najib on different projects in Generation USA program. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources to strengthen his knowledge.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials;