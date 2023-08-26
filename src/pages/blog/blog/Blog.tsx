import { Helmet } from "react-helmet";

import { BlogList, HeroImage, PageContainer } from "@components";

import type { VNode } from "preact";

const Blog = (): VNode => {
  return (
    <>
      <HeroImage />
      <Helmet>
        <meta charSet="utf-8" />
        <title>📰 Blog | Rodrigo Gross Lopez - Senior React Developer</title>
      </Helmet>
      <PageContainer>
        <BlogList pageSize={12} categories={true} pagination={true} />
      </PageContainer>
    </>
  );
};

export default Blog;
