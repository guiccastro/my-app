import React from 'react';
import './Experiences.css';
import { ExperiencesProps } from './ExperiencesProps';
import content from '../../content.json';
import { Content } from '../../content.types';
import hcltechLogo from '../../assets/hcltech_logo.jpeg';
import nelogicaLogo from '../../assets/nelogica_logo.jpg';
import furgLogo from '../../assets/furg_logo.jpg';
import autoceresLogo from '../../assets/autoceres_logo.png';
import furgbotLogo from '../../assets/furgbot_logo.png';

const logoMap: { [key: string]: string } = {
  'hcltech_logo.jpeg': hcltechLogo,
  'nelogica_logo.jpg': nelogicaLogo,
  'furg_logo.jpg': furgLogo,
  'autoceres_logo.png': autoceresLogo,
  'furgbot_logo.png': furgbotLogo,
};

export default function Experiences({ ref }: ExperiencesProps) {
  const { title, items } = (content as Content).experiences;

  return (
    <section id="experiences" className="experiences" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="header">
              <img src={logoMap[item.logo]} alt={`${item.company} Logo`} />
              <div className="text">
                <h2>{item.role}</h2>
                <h3>{item.company}</h3>
                <h4>{item.location}</h4>
                <h5>{item.period}</h5>
              </div>
            </div>

            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
            <p className="competences">{item.competences}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
