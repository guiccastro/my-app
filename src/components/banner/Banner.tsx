import React from 'react';
import profileImage from '../../assets/image-perfil.png';
import './Banner.css';
import { BannerProps } from './BannerProps';
import content from '../../content.json';
import { Content } from '../../content.types';

export default function Banner({ ref }: BannerProps) {
  const { title, description, links } = (content as Content).banner;

  return (
    <section id="banner" className="banner" ref={ref}>
      <h1 className="title">{title}</h1>

      <div className="perfil-links">
        <img src={profileImage} alt="Imagem de Perfil" className="perfil" />
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
