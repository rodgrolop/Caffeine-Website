import { useEffect, useState } from "preact/compat";
import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { privacyContentES, privacyContentEN } from "./content";
import { sanitizeLanguage } from "@utils";
import { useTranslation } from "react-i18next";
import Markdown from "preact-markdown";

import type { VNode } from "preact";

import { styles } from "./styles";

const PrivacyPolicy = (): VNode => {
  const { i18n } = useTranslation();
  const [privacyContent, setPrivacyContent] = useState<string>("");

  useEffect(() => {
    setPrivacyContent(
      sanitizeLanguage() === "es" ? privacyContentES : privacyContentEN
    );
  }, [i18n.language]);

  return (
    <PageContainer>
      <DocumentHead>
        <title>
          🔒 Privacy Policy | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </DocumentHead>
      <div style={styles.markdownContent}>
        {Markdown(privacyContent, { markupOpts: {}, markedOpts: {} })}
      </div>
      <SocialGrid />
    </PageContainer>
  );
};

export default PrivacyPolicy;
