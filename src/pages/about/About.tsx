import { useEffect, useState } from "preact/compat";
import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { aboutContentES, aboutContentEN } from "./content";
import { sanitizeLanguage } from "@utils";
import Markdown from "preact-markdown";

import type { VNode } from "preact";

import { styles } from "./styles";

import { useTranslation } from "react-i18next";

const About = (): VNode => {
  const { i18n } = useTranslation();
  const [aboutContent, setAboutContent] = useState<string>("");

  useEffect(() => {
    setAboutContent(
      sanitizeLanguage() === "es" ? aboutContentES : aboutContentEN
    );
  }, [i18n.language]);

  return (
    <PageContainer>
      <DocumentHead>
        <title>
          👨‍💻 About me | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </DocumentHead>
      <div style={styles.markdownContent}>
        {Markdown(aboutContent, { markupOpts: {}, markedOpts: {} })}
      </div>
      <SocialGrid />
    </PageContainer>
  );
};

export default About;
