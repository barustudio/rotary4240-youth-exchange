import type { ProgramCode, ProgramTitle } from "./const";

interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: MetaDataImage[];
  locale?: string;
  type?: string;
}

interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface MetaData {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: MetaDataRobots;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}
