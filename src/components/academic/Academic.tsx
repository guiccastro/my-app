import React from 'react';
import './Academic.css';
import { AcademicProps } from './AcademicProps';
import furgLogo from '../../assets/furg_logo.jpg';
import ctbmLogo from '../../assets/ctbm_logo.jpg';

const logoMap: { [key: string]: string } = {
  'furg_logo.jpg': furgLogo,
  'ctbm_logo.jpg': ctbmLogo,
};

export default function Academic({ content, ref }: AcademicProps) {
  const { title, items } = content;

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
