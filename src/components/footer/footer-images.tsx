import ApolloIcon from "./../custom-icons/ApolloIcon";
import CracoIcon from "./../custom-icons/CracoIcon";
import CloudinaryIcon from "./../custom-icons/CloudinaryIcon";
import DigitalOceanIcon from "./../custom-icons/DigitalOceanIcon";
import GraphQLIcon from "./../custom-icons/GraphQLIcon";
import MaterialUIIcon from "./../custom-icons/MaterialUIIcon";
import PostgreSQLIcon from "./../custom-icons/PostgreSQLIcon";
import ReactIcon from "./../custom-icons/ReactIcon";
import ReactRouterIcon from "./../custom-icons/ReactRouterIcon";
import RecoilIcon from "./../custom-icons/RecoilIcon";
import StrapiIcon from "./../custom-icons/StrapiIcon";
import TypeScriptIcon from "./../custom-icons/TypeScriptIcon";

import type { VNode } from "preact";

export type FooterImageProps = {
  name: string;
  link: string;
  icon?: VNode;
};

export const footerImages: FooterImageProps[] = [
  {
    name: "Strapi",
    link: "https://strapi.io/",
    icon: <StrapiIcon />,
  },
  {
    name: "GraphQL",
    link: "https://graphql.org/",
    icon: <GraphQLIcon />,
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    icon: <PostgreSQLIcon />,
  },
  {
    name: "Digital Ocean",
    link: "https://www.digitalocean.com/",
    icon: <DigitalOceanIcon />,
  },
  {
    name: "ReactJS",
    link: "https://reactjs.org/",
    icon: <ReactIcon />,
  },
  {
    name: "Craco",
    link: "https://craco.js.org/",
    icon: <CracoIcon />,
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: <TypeScriptIcon />,
  },
  {
    name: "RecoilJS",
    link: "https://recoiljs.org/",
    icon: <RecoilIcon />,
  },
  {
    name: "Material UI",
    link: "https://mui.com/",
    icon: <MaterialUIIcon />,
  },
  {
    name: "React Router",
    link: "https://reactrouter.com/en/main",
    icon: <ReactRouterIcon />,
  },
  {
    name: "Apollo GraphQL",
    link: "https://www.apollographql.com/",
    icon: <ApolloIcon />,
  },
  {
    name: "Cloudinary",
    link: "https://cloudinary.com/",
    icon: <CloudinaryIcon />,
  },
];
