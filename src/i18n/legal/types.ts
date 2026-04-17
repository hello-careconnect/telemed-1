export type LegalSection = {
  heading: string;
  body: string;
};

export type LegalDocument = {
  title: string;
  updated: string;
  intro: string;
  prelude: string;
  sections: LegalSection[];
};

export type LegalContent = {
  en: LegalDocument;
  bn: LegalDocument;
};
