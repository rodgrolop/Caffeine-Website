import { useEffect, useState } from "preact/compat";
import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { termsContentES, termsContentEN } from "./content";
import { useSanitizeLanguage } from "@utils";
import Markdown from "preact-markdown";

import { useT } from "talkr";

import type { VNode } from "preact";

import { styles } from "./styles";

const Terms = (): VNode => {
  const { locale } = useT();
  const { language } = useSanitizeLanguage();
  const [termsContent, setTermsContent] = useState<string>("");

  useEffect(() => {
    setTermsContent(language() === "es" ? termsContentES : termsContentEN);
  }, [locale]);

  return (
    <PageContainer>
      <DocumentHead>
        <title>
          🔒 Terms and Conditions | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </DocumentHead>
      <div style={styles.markdownContent}>
        {Markdown(termsContent, { markupOpts: {}, markedOpts: {} })}
      </div>
      <SocialGrid />
    </PageContainer>
  );
};

export default Terms;
