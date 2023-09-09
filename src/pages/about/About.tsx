import { useEffect, useState } from "preact/compat";
import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { aboutContentES, aboutContentEN } from "./content";
import { useSanitizeLanguage } from "@utils";
import Markdown from "preact-markdown";
import { useT } from "talkr";

import type { VNode } from "preact";

import { styles } from "./styles";

const About = (): VNode => {
  const { locale } = useT();
  const { language } = useSanitizeLanguage();
  const [aboutContent, setAboutContent] = useState<string>("");

  useEffect(() => {
    setAboutContent(language() === "es" ? aboutContentES : aboutContentEN);
  }, [locale]);

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
