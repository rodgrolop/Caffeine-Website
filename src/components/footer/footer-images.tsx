import ReactQueryIcon from "../custom-icons/ReactQueryIcon";
import ViteIcon from "../custom-icons/ViteIcon";
import CloudinaryIcon from "./../custom-icons/CloudinaryIcon";
import DigitalOceanIcon from "./../custom-icons/DigitalOceanIcon";
import GraphQLIcon from "./../custom-icons/GraphQLIcon";
import MaterialUIIcon from "./../custom-icons/MaterialUIIcon";
import PostgreSQLIcon from "./../custom-icons/PostgreSQLIcon";
import PreactIcon from "../custom-icons/PreactIcon";
import ReactRouterIcon from "./../custom-icons/ReactRouterIcon";
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
    name: "PreactJS",
    link: "https://preactjs.com/",
    icon: <PreactIcon />,
  },
  {
    name: "Vite",
    link: "https://vitejs.dev/",
    icon: <ViteIcon />,
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: <TypeScriptIcon />,
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
    name: "React Query",
    link: "https://tanstack.com/query/latest",
    icon: <ReactQueryIcon />,
  },
  {
    name: "Cloudinary",
    link: "https://cloudinary.com/",
    icon: <CloudinaryIcon />,
  },
];
