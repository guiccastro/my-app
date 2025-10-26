import React from 'react';
import './Academic.css';
import { AcademicProps } from './AcademicProps';
import content from '../../content.json';

const logoMap: { [key: string]: string } = {
  'furg_logo.jpg': require('../../assets/furg_logo.jpg'),
  'ctbm_logo.jpg': require('../../assets/ctbm_logo.jpg'),
};

export default function Academic({ ref }: AcademicProps) {
  const { title, items } = content.academic;

  return (
    <section id="academic" className="academic" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={logoMap[item.logo]} alt={`${item.institution} Logo`} />
            <h2>{item.institution}</h2>
            <h3>{item.level}</h3>
            {item.course && <h4>{item.course}</h4>}
          </div>
        ))}
      </div>
    </section>
  );
}
