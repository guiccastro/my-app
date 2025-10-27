import React from 'react';
import './Banner.css';
import { BannerProps } from './BannerProps';

export default function Banner({ content, ref }: BannerProps) {
  const { title, description, links } = content;

  return (
    <section id="banner" className="banner" ref={ref}>
      <h1 className="title">{title}</h1>

      <div className="perfil-links">
        <img
          src="https://github.com/guiccastro.png"
          alt="Imagem de Perfil"
          className="perfil"
        />
        <div className="links">
          {links.map((link, index) => (
            <a href={link.url} target="_blank" rel="noreferrer" key={index}>
              <i className={link.icon}></i> {link.name}
            </a>
          ))}
        </div>
      </div>
      <p className="description">{description}</p>
    </section>
  );
}
