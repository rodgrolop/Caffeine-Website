import { useEffect, useState } from "preact/compat";
import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { privacyContentES, privacyContentEN } from "./content";
import { useSanitizeLanguage } from "@utils";
import { useT } from "talkr";
import Markdown from "preact-markdown";

import type { VNode } from "preact";

import { styles } from "./styles";

const PrivacyPolicy = (): VNode => {
  const { locale } = useT();
  const { language } = useSanitizeLanguage();
  const [privacyContent, setPrivacyContent] = useState<string>("");

  useEffect(() => {
    setPrivacyContent(
      language() === "es" ? privacyContentES : privacyContentEN
    );
  }, [locale]);

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
