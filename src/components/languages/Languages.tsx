import React from 'react';
import './Languages.css';
import { LanguagesProps } from './LanguagesProps';

export default function Languages({ content, ref }: LanguagesProps) {
  const { title, items } = content;

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
