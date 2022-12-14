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
      test: 'Through the 12 week, 450+ hour program that I taught, Najib continued to display  his hard work and dedication as he juggled the responsibilities of class and his busy schedule outside of the program. Najib demonstrated these attributes through building projects, learning new languages and technologies, helping others, asking questions, being present every day, and persevering through a hectic schedule.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/lazaroalsina/',
      name: 'Lazaro Alsina',
      role: 'Master Instructor & Digital Curriculum Designer for Software',
      test: "I enjoyed my time with Najib; he cares about his work and ensures everything is working and prepared correctly. He will ensure his work and projects will meet his client's and employer's expectations.",
    },
  ];
  return (
    <section id="testmonials">
      <h5 style={{fontSize: '1.7rem'}}>Feedback from other folks</h5>
      <h2 style={{color: 'white'}}>Feedback</h2>
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