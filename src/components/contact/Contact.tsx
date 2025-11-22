import React from 'react';
import './Contact.css';
import { ContactProps } from './ContactProps';

export default function Contact({ content, ref }: ContactProps) {
  const {
    title,
    address,
    phone,
    email,
    social,
    developedBy,
    addressLabel,
    phoneLabel,
    emailLabel,
  } = content;

  return (
    <footer id="contact" className="contact" ref={ref}>
      <h1 className="section-title">{title}</h1>

      <div className="list">
        <div className="item">
          <h2>{addressLabel}:</h2>
          <p>{address}</p>
        </div>

        <div className="item">
          <h2>{phoneLabel}:</h2>
          <a href={phone.link}>
            <p>{phone.number}</p>
          </a>
        </div>

        <div className="item">
          <h2>{emailLabel}:</h2>
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
