import React from 'react';
import './Projects.css';
import { ProjectsProps } from './ProjectsProps';
import curriculoOnlineBanner from '../../assets/curriculo_online_banner.png';
import mydexBanner from '../../assets/mydex_banner.png';
import tccBanner from '../../assets/tcc_banner.png';
import autoceresBanner from '../../assets/autoceres_banner.jpg';
import furgbotBanner from '../../assets/furgbot_banner.jpg';

const bannerMap: { [key: string]: string } = {
  'curriculo_online_banner.png': curriculoOnlineBanner,
  'mydex_banner.png': mydexBanner,
  'tcc_banner.png': tccBanner,
  'autoceres_banner.jpg': autoceresBanner,
  'furgbot_banner.jpg': furgbotBanner,
};

export default function Projects({ content, ref }: ProjectsProps) {
  const { title, items } = content;

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
