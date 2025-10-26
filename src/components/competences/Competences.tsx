import React from 'react';
import './Competences.css';
import { CompetencesProps } from './CompetencesProps';

export default function Competences({ ref }: CompetencesProps) {
  return (
    <section id="competences" className="competences" ref={ref}>
      <h1 className="section-title">Competências</h1>

      <div className="competence-sections">
        <div className="section">
          <h3 className="subsection-title" style={{ fontSize: '30px' }}>
            Pessoais
          </h3>
          <div className="competence-list">
            <div className="item">
              <h2>Autodidata</h2>
              <p className="level" style={{ width: '90%' }}>
                90%
              </p>
            </div>
            <div className="item">
              <h2>Responsável</h2>
              <p className="level" style={{ width: '85%' }}>
                85%
              </p>
            </div>
            <div className="item">
              <h2>Dedicado</h2>
              <p className="level" style={{ width: '80%' }}>
                80%
              </p>
            </div>
            <div className="item">
              <h2>Focado</h2>
              <p className="level" style={{ width: '75%' }}>
                75%
              </p>
            </div>
            <div className="item">
              <h2>Vontade de aprender</h2>
              <p className="level" style={{ width: '70%' }}>
                70%
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="subsection-title" style={{ fontSize: '30px' }}>
            Softwares
          </h3>
          <div className="competence-list">
            <div className="item">
              <h2>Android Studio</h2>
              <p className="level advanced">Avançado</p>
            </div>
            <div className="item">
              <h2>Unity</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Trello</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>Jira</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>Microsoft Word</h2>
              <p className="level advanced">Avançado</p>
            </div>
            <div className="item">
              <h2>Microsoft PowerPoint</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Microsoft Excel</h2>
              <p className="level basic">Básico</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="subsection-title" style={{ fontSize: '30px' }}>
            Linguagens de Programação
          </h3>
          <div className="competence-list">
            <div className="item">
              <h2>Kotlin</h2>
              <p className="level advanced">Avançado</p>
            </div>
            <div className="item">
              <h2>Java</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>C#</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Python</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>C++</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>HTML</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>CSS</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>C</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>SQL</h2>
              <p className="level beginner">Iniciante</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="subsection-title" style={{ fontSize: '30px' }}>
            Tecnologias
          </h3>
          <div className="competence-list">
            <div className="item">
              <h2>Desenvolvimento Android</h2>
              <p className="level advanced">Avançado</p>
            </div>
            <div className="item">
              <h2>Design Patterns</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Desenvolvimento Web</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>Desenvolvimento de Jogos</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>Arduino</h2>
              <p className="level basic">Básico</p>
            </div>
            <div className="item">
              <h2>Banco de Dados</h2>
              <p className="level beginner">Iniciante</p>
            </div>
            <div className="item">
              <h2>Eletrônica</h2>
              <p className="level beginner">Iniciante</p>
            </div>
            <div className="item">
              <h2>Robótica</h2>
              <p className="level beginner">Iniciante</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="subsection-title" style={{ fontSize: '30px' }}>
            Desenvolvimento Android
          </h3>
          <div className="competence-list">
            <div className="item">
              <h2>Kotlin</h2>
              <p className="level advanced">Avançado</p>
            </div>
            <div className="item">
              <h2>Retrofit</h2>
              <p className="level advanced">Avançado</p>
            </div>
            <div className="item">
              <h2>Arquitetura MVVM</h2>
              <p className="level advanced">Avançado</p>
            </div>
            <div className="item">
              <h2>Java</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Coroutines</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Injeção de Dependências</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Firebase Crashlytics</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>Room</h2>
              <p className="level intermediary">Intermediário</p>
            </div>
            <div className="item">
              <h2>SQLite</h2>
              <p className="level basic">Básico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
