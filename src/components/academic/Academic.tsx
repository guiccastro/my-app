import React from 'react';
import './Academic.css';
import furgLogo from '../../assets/furg_logo.jpg';
import ctbmLogo from '../../assets/ctbm_logo.jpg';
import { AcademicProps } from './AcademicProps';

export default function Academic({ ref }: AcademicProps) {
  return (
    <section id="academic" className="academic" ref={ref}>
      <h1 className="section-title">Formação Acadêmica</h1>

      <div className="list">
        <div className="item">
          <img src={furgLogo} alt="FURG Logo" />
          <h2>Universidade Federal de Rio Grande</h2>
          <h3>Ensino Superior (2016 - 2021)</h3>
          <h4>Bacharelado em Engenharia de Computação</h4>
        </div>

        <div className="item">
          <img src={ctbmLogo} alt="CTBM Logo" />
          <h2>Colégio Tiradentes da Brigada Militar de Passo Fundo</h2>
          <h3>Ensino Médio (2013 - 2015)</h3>
        </div>
      </div>
    </section>
  );
}
