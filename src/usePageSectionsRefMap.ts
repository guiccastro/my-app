import { RefObject, useRef } from "react";
import { PageSections } from "./PageSections";

export default function usePageSectionsRefMap(): Record<PageSections, RefObject<any>> {
    return {
        [PageSections.overview]: useRef<HTMLElement>(null),
        [PageSections.about]: useRef<HTMLElement>(null),
        [PageSections.experiences]: useRef<HTMLElement>(null),
        [PageSections.academic]: useRef<HTMLElement>(null),
        [PageSections.projects]: useRef<HTMLElement>(null),
        [PageSections.languages]: useRef<HTMLElement>(null),
        [PageSections.competences]: useRef<HTMLElement>(null),
        [PageSections.certificates]: useRef<HTMLElement>(null),
        [PageSections.contacts]: useRef<HTMLElement>(null)
    };
}