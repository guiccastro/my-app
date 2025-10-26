import React from 'react';
import './About.css';
import content from '../../content.json';
import { AboutProps } from './AboutProps';

export default function About({ ref }: AboutProps) {
  const { title, description, details } = content.about;

  return (
    <section id="about-me" className="about" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="description">
        <div className="description-text">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <img
          src="https://github.com/guiccastro.png"
          alt="Imagem de Perfil"
          className="perfil"
        />
      </div>

      <div className="details">
        {details.map((detail, index) => (
          <div key={index}>
            <h1 className="subsection-title">{detail.title}</h1>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
