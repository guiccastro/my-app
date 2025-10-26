import React from 'react';
import './Languages.css';
import { LanguagesProps } from './LanguagesProps';
import content from '../../content.json';
import { Content } from '../../content.types';

export default function Languages({ ref }: LanguagesProps) {
  const { title, items } = (content as Content).languages;

  return (
    <section id="languages" className="languages" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="competence-list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <h2>{item.name}</h2>
            <p className={`level ${item.levelClass}`}>{item.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
