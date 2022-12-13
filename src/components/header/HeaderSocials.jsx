import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a style={{color: 'lightsteelblue'}} href="https://www.linkedin.com/in/najibkiyemba-156775241/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a style={{color: 'lightsteelblue'}} href="https://github.com/najibkiyemba" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;