import React from 'react';
import './styles.css';

interface NavigationProps {
  nextSlide: () => void;
  prevSlide: () => void;
  currentSlide: number;
  totalSlides: number;
}

const Navigation: React.FC<NavigationProps> = ({ nextSlide, prevSlide, currentSlide, totalSlides }) => {
  return (
    <div className="navigation">
      <button className="nav-button" onClick={prevSlide} disabled={currentSlide === 0}>
        Anterior
      </button>
      <span className="nav-indicator">{currentSlide + 1} / {totalSlides}</span>
      <button className="nav-button" onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
        Próximo
      </button>
    </div>
  );
};

export default Navigation;
