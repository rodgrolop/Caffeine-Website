import { useEffect } from "preact/compat";
import { PageContainer, SocialGrid } from "@components";
import { Helmet } from "react-helmet";
import { aboutContentES, aboutContentEN } from "./content";
import { sanitizeLanguage } from "@utils";
import { useRemark } from "react-remark";

import type { VNode } from "preact";

import { styles } from "./styles";

import { useTranslation } from "react-i18next";

const About = (): VNode => {
  const { i18n } = useTranslation();
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(
      sanitizeLanguage() === "es" ? aboutContentES : aboutContentEN
    );
  }, [i18n.language]);

  return (
    <PageContainer>
      <Helmet>
        <title>
          👨‍💻 About me | Rodrigo Gross Lopez - Senior React Developer
        </title>
      </Helmet>
      <div style={styles.markdownContent}>{reactContent}</div>
      <SocialGrid />
    </PageContainer>
  );
};

export default About;
