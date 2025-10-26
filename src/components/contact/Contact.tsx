import React from 'react';
import './Contact.css';
import { ContactProps } from './ContactProps';

export default function Contact({ ref }: ContactProps) {
  return (
    <footer id="contact" className="contact" ref={ref}>
      <h1 className="section-title">Contato</h1>

      <div className="list">
        <div className="item">
          <h2>Endereço:</h2>
          <p>Passo Fundo, Rio Grande do Sul - Brasil</p>
        </div>

        <div className="item">
          <h2>Telefone:</h2>
          <a href="tel:+5553999992518">
            <p>(53) 99999-2518</p>
          </a>
        </div>

        <div className="item">
          <h2>E-mail:</h2>
          <a href="mailto:guiccastro@outlook.com">
            <p>guiccastro@outlook.com</p>
          </a>
        </div>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/guilhermescastro/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://play.google.com/store/apps/developer?id=Dev+Guilherme+Castro"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-google-play"></i>
          </a>
          <a
            href="https://github.com/guiccastro"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://guilhermescastro.itch.io/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-itch-io"></i>
          </a>
        </div>

        <p className="developed">Desenvolvido por Guilherme Silva de Castro.</p>
      </div>
    </footer>
  );
}
