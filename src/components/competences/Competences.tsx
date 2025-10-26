import React from 'react';
import './Competences.css';
import { CompetencesProps } from './CompetencesProps';
import content from '../../content.json';
import {
  Content,
  LevelCompetenceItem,
  PercentageCompetenceItem,
} from '../../content.types';

const isLevelCompetence = (
  item: PercentageCompetenceItem | LevelCompetenceItem,
): item is LevelCompetenceItem => {
  return 'levelClass' in item;
};

export default function Competences({ ref }: CompetencesProps) {
  const { title, sections } = (content as Content).competences;

  return (
    <section id="competences" className="competences" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="competence-sections">
        {sections.map((section, index) => (
          <div className="section" key={index}>
            <h3 className="subsection-title" style={{ fontSize: '30px' }}>
              {section.title}
            </h3>
            <div className="competence-list">
              {section.items.map((item, itemIndex) => (
                <div className="item" key={itemIndex}>
                  <h2>{item.name}</h2>
                  {section.type === 'percentage' ? (
                    <p className="level" style={{ width: item.level }}>
                      {item.level}
                    </p>
                  ) : (
                    isLevelCompetence(item) && (
                      <p className={`level ${item.levelClass}`}>{item.level}</p>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
