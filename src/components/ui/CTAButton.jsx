import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTAButton = ({ text, onClick }) => {
  return (
    <button className="navbar-cta" onClick={onClick} >
      {text} <ArrowUpRight />
    </button>
  );
};

export default CTAButton;