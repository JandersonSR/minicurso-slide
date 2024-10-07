import React, { useState } from 'react';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import './App.css';

const slides = [
  {
    title: 'Welcome',
    content: 'Bem-vindos ao Minicurso de Node.js, TypeScript e MongoDB! \nVamos aprender a construir APIs usando essas tecnologias.',
    image: '/images/welcome.png'
  },
  {
    title: 'Agenda',
    content: `
    1. O que é Node.js?
    2. Introdução ao TypeScript
    3. Banco de dados MongoDB e Mongoose
    4. Ferramentas: Postman e Git
    5. Demonstração prática
    `,
    image: '/images/agenda.png',
    className: 'background-image'
  },
  {
    title: 'Node.js',
    content: 'Node.js é uma plataforma de back-end que permite executar JavaScript no lado do servidor. Ideal para construir aplicações escaláveis e rápidas.',
    image: '/images/nodejs.png'
  },
  {
    title: 'TypeScript',
    content: 'TypeScript é um superconjunto do JavaScript que adiciona tipagem estática ao código, permitindo a detecção de erros em tempo de desenvolvimento.',
    image: '/images/typescript.png'
  },
  {
    title: 'MongoDB',
    content: 'MongoDB é um banco de dados NoSQL orientado a documentos. Ele armazena dados em formato JSON, o que facilita a integração com aplicações JavaScript.',
    image: '/images/mongodb.png'
  },
  {
    title: 'Mongoose',
    content: 'Mongoose é uma biblioteca Node.js para trabalhar com MongoDB, permitindo a modelagem de dados e validações automáticas.',
    image: '/images/mongoose.png',
    className: 'background-image'
  },
  {
    title: 'Postman',
    content: 'Postman é uma ferramenta poderosa para testar APIs RESTful, permitindo o envio de requisições HTTP e a visualização de respostas.',
    image: '/images/postman.png'
  },
  {
    title: 'Git',
    content: 'Git é um sistema de controle de versão distribuído que ajuda a rastrear mudanças no código e colaborar com outros desenvolvedores.',
    image: '/images/git.png'
  },
  {
    title: 'Perguntas!',
    content: `Revisamos as principais tecnologias usadas no desenvolvimento de APIs modernas e fizemos uma demonstração prática.
    \n\t AGX-Software: vagas@agxsoftware.com
    \t GitHub: https://github.com/JandersonSR
    \t Discord: https://discord.gg/afbK9F2y`,
    image: '/images/agxsoftware.png',
    className: 'background-image'
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="App">
      <Slide
        title={slides[currentSlide].title}
        content={slides[currentSlide].content}
        image={slides[currentSlide].image}
        className={slides[currentSlide].className}
      />
      <Navigation
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
}

export default App;
