import React from 'react';
import './Projects.css';
import { ProjectsProps } from './ProjectsProps';
import content from '../../content.json';
import { Content } from '../../content.types';

const bannerMap: { [key: string]: string } = {
  'curriculo_online_banner.png': require('../../assets/curriculo_online_banner.png'),
  'mydex_banner.png': require('../../assets/mydex_banner.png'),
  'tcc_banner.png': require('../../assets/tcc_banner.png'),
  'autoceres_banner.jpg': require('../../assets/autoceres_banner.jpg'),
  'furgbot_banner.jpg': require('../../assets/furgbot_banner.jpg'),
};

export default function Projects({ ref }: ProjectsProps) {
  const { title, items } = (content as Content).projects;

  return (
    <section id="projects" className="projects" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="list">
        {items.map((item, index) => (
          <a
            className="item"
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            <img src={bannerMap[item.banner]} alt={`${item.title} Banner`} />
            <h2>{item.title}</h2>
            <h3>{item.type}</h3>
            <h4>{item.period}</h4>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            <h5>{item.technologies}</h5>
          </a>
        ))}
      </div>
    </section>
  );
}
