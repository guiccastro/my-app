import React from 'react';
import './Contact.css';
import { ContactProps } from './ContactProps';
import content from '../../content.json';
import { Content } from '../../content.types';

export default function Contact({ ref }: ContactProps) {
  const { title, address, phone, email, social, developedBy } = (
    content as Content
  ).contact;

  return (
    <footer id="contact" className="contact" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="list">
        <div className="item">
          <h2>Endereço:</h2>
          <p>{address}</p>
        </div>

        <div className="item">
          <h2>Telefone:</h2>
          <a href={phone.link}>
            <p>{phone.number}</p>
          </a>
        </div>

        <div className="item">
          <h2>E-mail:</h2>
          <a href={email.link}>
            <p>{email.address}</p>
          </a>
        </div>

        <div className="icons">
          {social.map((socialLink, index) => (
            <a
              href={socialLink.url}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <i className={socialLink.icon}></i>
            </a>
          ))}
        </div>

        <p className="developed">{developedBy}</p>
      </div>
    </footer>
  );
}
