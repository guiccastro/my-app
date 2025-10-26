import React from 'react';
import './Experiences.css';
import { ExperiencesProps } from './ExperiencesProps';
import content from '../../content.json';
import { Content } from '../../content.types';

const logoMap: { [key: string]: string } = {
  'hcltech_logo.jpeg': require('../../assets/hcltech_logo.jpeg'),
  'nelogica_logo.jpg': require('../../assets/nelogica_logo.jpg'),
  'furg_logo.jpg': require('../../assets/furg_logo.jpg'),
  'autoceres_logo.png': require('../../assets/autoceres_logo.png'),
  'furgbot_logo.png': require('../../assets/furgbot_logo.png'),
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
