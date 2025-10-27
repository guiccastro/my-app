import React from 'react';
import './Certificates.css';
import { CertificatesProps } from './CertificatesProps';

export default function Certificates({ content, ref }: CertificatesProps) {
  const { title, items } = content;

  return (
    <section id="certificates" className="certificates" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <h2>{item.title}</h2>
            <h3>
              <b>{item.institution}</b>
              {item.duration && ` - ${item.duration}`} <b>|</b> {item.date}
            </h3>
            {item.skills && <h4>{item.skills}</h4>}
          </div>
        ))}
      </div>
    </section>
  );
}
