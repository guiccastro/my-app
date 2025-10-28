import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Experiences from './components/experiences/Experiences';
import Academic from './components/academic/Academic';
import Projects from './components/projects/Projects';
import Languages from './components/languages/Languages';
import Competences from './components/competences/Competences';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import usePageSectionsRefMap, { PageSections } from './usePageSectionsRefMap';
import { Content } from './content.types';
import content from './content.json';
import contentEn from './content_en.json';

type Language = 'pt' | 'en';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  const currentContent =
    language === 'pt' ? (content as Content) : (contentEn as Content);

  function handleLanguageChange(newLanguage: Language) {
    setLanguage(newLanguage);
  }

  const pageSectionsRefMap = usePageSectionsRefMap();
  const sectionVisibilityThreshold = 0.7;
  const intersectionPrecisionSteps = 50;
  const [activeTab, setActiveTab] = useState(PageSections.overview);

  useEffect(
    function () {
      document.title = currentContent.pageTitle;
    },
    [currentContent],
  );

  useEffect(
    function () {
      function verifySection(entry: IntersectionObserverEntry) {
        if (!entry.rootBounds) {
          return;
        }

        const visibleHeight = entry.intersectionRect.height;
        const viewportHeight = entry.rootBounds.height;
        const screenPercentage =
          viewportHeight > 0 ? visibleHeight / viewportHeight : 0;

        if (
          entry.isIntersecting &&
          (screenPercentage > sectionVisibilityThreshold ||
            entry.intersectionRatio > sectionVisibilityThreshold)
        ) {
          const sectionId = Object.keys(pageSectionsRefMap).find(
            (key) =>
              pageSectionsRefMap[key as PageSections].current === entry.target,
          );
          if (sectionId) {
            setActiveTab(sectionId as PageSections);
          }
        }
      }

      function observerCallback(entries: IntersectionObserverEntry[]) {
        entries.forEach((entry) => verifySection(entry));
      }

      const observerOptions = {
        root: null,
        threshold: Array.from(
          { length: 51 },
          (v, i) => i / intersectionPrecisionSteps,
        ),
      };

      const sectionObserver = new IntersectionObserver(
        observerCallback,
        observerOptions,
      );

      Object.values(pageSectionsRefMap).forEach(
        (ref) => ref.current && sectionObserver.observe(ref.current),
      );

      return () => sectionObserver.disconnect();
    },
    [pageSectionsRefMap],
  );

  return (
    <>
      <Header
        content={currentContent.header}
        activeTab={activeTab}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <main>
        <Banner
          ref={pageSectionsRefMap[PageSections.overview]}
          content={currentContent.banner}
        />
        <About
          ref={pageSectionsRefMap[PageSections.about]}
          content={currentContent.about}
        />
        <Experiences
          ref={pageSectionsRefMap[PageSections.experiences]}
          content={currentContent.experiences}
        />
        <Academic
          ref={pageSectionsRefMap[PageSections.academic]}
          content={currentContent.academic}
        />
        <Projects
          ref={pageSectionsRefMap[PageSections.projects]}
          content={currentContent.projects}
        />
        <Languages
          ref={pageSectionsRefMap[PageSections.languages]}
          content={currentContent.languages}
        />
        <Competences
          ref={pageSectionsRefMap[PageSections.competences]}
          content={currentContent.competences}
        />
        <Certificates
          ref={pageSectionsRefMap[PageSections.certificates]}
          content={currentContent.certificates}
        />
      </main>
      <Contact
        ref={pageSectionsRefMap[PageSections.contacts]}
        content={currentContent.contact}
      />
    </>
  );
}
