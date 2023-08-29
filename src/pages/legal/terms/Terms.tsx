import { useEffect, useState } from "preact/compat";
import { PageContainer, SocialGrid } from "@components";
import { Helmet } from "react-helmet";
import { termsContentES, termsContentEN } from "./content";
import { sanitizeLanguage } from "@utils";
import Markdown from "preact-markdown";

import { useTranslation } from "react-i18next";

import type { VNode } from "preact";

import { styles } from "./styles";

const Terms = (): VNode => {
  const { i18n } = useTranslation();
  const [termsContent, setTermsContent] = useState<string>("");

  useEffect(() => {
    setTermsContent(
      sanitizeLanguage() === "es" ? termsContentES : termsContentEN
    );
  }, [i18n.language]);

  return (
    <PageContainer>
      <Helmet>
        <title>
          🔒 Privacy Policy | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </Helmet>
      <div style={styles.markdownContent}>
        {Markdown(termsContent, { markupOpts: {}, markedOpts: {} })}
      </div>
      <SocialGrid />
    </PageContainer>
  );
};

export default Terms;
