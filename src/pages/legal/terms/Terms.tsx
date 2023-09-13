import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { termsContentES, termsContentEN } from "./content";
import { useSanitizeLanguage } from "@utils";
import Markdown from "preact-markdown";

import type { VNode } from "preact";

import { styles } from "./styles";

const Terms = (): VNode => {
  const { language } = useSanitizeLanguage();

  return (
    <PageContainer>
      <DocumentHead>
        <title>
          🔒 Terms and Conditions | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </DocumentHead>
      <div style={styles.markdownContent}>
        {Markdown(language() === "es" ? termsContentES : termsContentEN, {
          markupOpts: {},
          markedOpts: {},
        })}
      </div>
      <SocialGrid />
    </PageContainer>
  );
};

export default Terms;
