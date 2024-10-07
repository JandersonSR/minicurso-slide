import React from 'react';
import './styles.css';

interface SlideProps {
  title: string;
  content: string;
  image: string;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ title, content, image, className }) => {
  return (
    <div className="slide">
      <div className="slide-header">
        <h1>{title}</h1>
      </div>
      <div className="slide-body">
        <img src={image} alt={title} className={className ?? "slide-image"} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Slide;
