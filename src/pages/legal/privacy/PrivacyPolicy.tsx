import { useEffect } from "preact/compat";
import { PageContainer, SocialGrid } from "@components";
import { Helmet } from "react-helmet";
import { privacyContentES, privacyContentEN } from "./content";
import { sanitizeLanguage } from "@utils";
import { useTranslation } from "react-i18next";
import { useRemark } from "react-remark";

import type { VNode } from "preact";

import { styles } from "./styles";

const PrivacyPolicy = (): VNode => {
  const { i18n } = useTranslation();
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(
      sanitizeLanguage() === "es" ? privacyContentES : privacyContentEN
    );
  }, [i18n.language]);

  return (
    <PageContainer>
      <Helmet>
        <title>
          🔒 Privacy Policy | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </Helmet>
      <div style={styles.markdownContent}>{reactContent}</div>
      <SocialGrid />
    </PageContainer>
  );
};

export default PrivacyPolicy;
