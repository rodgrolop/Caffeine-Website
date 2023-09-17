import { homeContentES, homeContentEN } from "./content";
import Markdown from "preact-markdown";

import { HeroImage, PageContainer, DocumentHead } from "@components";

import type { VNode } from "preact";

import { styles } from "./styles";
import { useSanitizeLanguage } from "@utils";

const Home = (): VNode => {
  const { language } = useSanitizeLanguage();

  return (
    <>
      <DocumentHead>
        <title>
          🚀 Rodrigo Gross Lopez - Senior React Developer | Fast and Performant
          Websites 👨‍💻
        </title>
      </DocumentHead>
      <HeroImage />
      <PageContainer>
        <div style={styles.markdownContent}>
          {Markdown(language() === "es" ? homeContentES : homeContentEN, {
            markupOpts: {},
            markedOpts: {},
          })}
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
