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
import usePageSectionsRefMap from './usePageSectionsRefMap';
import { PageSections } from './PageSections';

export default function App() {
  const pageSectionsRefMap = usePageSectionsRefMap();
  const sectionVisibilityThreshold = 0.7;
  const intersectionPrecisionSteps = 50;
  const [activeTab, setActiveTab] = useState(PageSections.overview);

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
      <Header activeTab={activeTab} />
      <main>
        <Banner ref={pageSectionsRefMap[PageSections.overview]} />
        <About ref={pageSectionsRefMap[PageSections.about]} />
        <Experiences ref={pageSectionsRefMap[PageSections.experiences]} />
        <Academic ref={pageSectionsRefMap[PageSections.academic]} />
        <Projects ref={pageSectionsRefMap[PageSections.projects]} />
        <Languages ref={pageSectionsRefMap[PageSections.languages]} />
        <Competences ref={pageSectionsRefMap[PageSections.competences]} />
        <Certificates ref={pageSectionsRefMap[PageSections.certificates]} />
        <Contact ref={pageSectionsRefMap[PageSections.contacts]} />
      </main>
    </>
  );
}
