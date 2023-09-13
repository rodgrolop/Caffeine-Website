import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { privacyContentES, privacyContentEN } from "./content";
import { useSanitizeLanguage } from "@utils";
import Markdown from "preact-markdown";

import type { VNode } from "preact";

import { styles } from "./styles";

const PrivacyPolicy = (): VNode => {
  const { language } = useSanitizeLanguage();

  return (
    <PageContainer>
      <DocumentHead>
        <title>
          🔒 Privacy Policy | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </DocumentHead>
      <div style={styles.markdownContent}>
        {Markdown(language() === "es" ? privacyContentES : privacyContentEN, {
          markupOpts: {},
          markedOpts: {},
        })}
      </div>
      <SocialGrid />
    </PageContainer>
  );
};

export default PrivacyPolicy;
