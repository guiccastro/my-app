import HeaderTabItem from './HeaderTabItem';
import styles from './HeaderTabs.module.css';
import { HeaderTabsProps } from './HeaderTabsProps';
import { PageSections } from '../../PageSections';

export default function HeaderTabs({ activeTab }: HeaderTabsProps) {
  return (
    <div className={styles.tabs}>
      <HeaderTabItem
        id={PageSections.about}
        href="#about-me"
        label="Sobre Mim"
        activeTab={activeTab}
      />
      <HeaderTabItem
        id={PageSections.experiences}
        href="#experiences"
        label="Experiências"
        activeTab={activeTab}
      />
      <HeaderTabItem
        id={PageSections.academic}
        href="#academic"
        label="Formação Acadêmica"
        activeTab={activeTab}
      />
      <HeaderTabItem
        id={PageSections.projects}
        href="#projects"
        label="Projetos"
        activeTab={activeTab}
      />
      <HeaderTabItem
        id={PageSections.languages}
        href="#languages"
        label="Idiomas"
        activeTab={activeTab}
      />
      <HeaderTabItem
        id={PageSections.competences}
        href="#competences"
        label="Competências"
        activeTab={activeTab}
      />
      <HeaderTabItem
        id={PageSections.certificates}
        href="#certificates"
        label="Certificados"
        activeTab={activeTab}
      />
      <HeaderTabItem
        id={PageSections.contacts}
        href="#contact"
        label="Contato"
        activeTab={activeTab}
      />
    </div>
  );
}
