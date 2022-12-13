import React from 'react';
import Resume from '../../assets/Najib_KiyembaResume.DOCX';

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Can we talk?
      </a>
    </div>
  );
};

export default CTA;