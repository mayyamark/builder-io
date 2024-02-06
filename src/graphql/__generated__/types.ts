export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

/** A link to navigate through the site */
export type Link = {
  __typename?: 'Link';
  content?: Maybe<Scalars['JSONObject']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<LinkData>;
  endDate?: Maybe<Scalars['Float']['output']>;
  everything?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastUpdated?: Maybe<Scalars['Float']['output']>;
  lastUpdatedBy?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['ID']['output']>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  published?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Array<Maybe<Query>>>;
  screenshot?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Float']['output']>;
  testRatio?: Maybe<Scalars['Int']['output']>;
  variations?: Maybe<Scalars['JSONObject']['output']>;
};

export type LinkData = {
  __typename?: 'LinkData';
  href?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** Navigation links */
export type NavigationLinks = {
  __typename?: 'NavigationLinks';
  content?: Maybe<Scalars['JSONObject']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<NavigationLinksData>;
  endDate?: Maybe<Scalars['Float']['output']>;
  everything?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastUpdated?: Maybe<Scalars['Float']['output']>;
  lastUpdatedBy?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['ID']['output']>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  published?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Array<Maybe<Query>>>;
  screenshot?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Float']['output']>;
  testRatio?: Maybe<Scalars['Int']['output']>;
  variations?: Maybe<Scalars['JSONObject']['output']>;
};

export type NavigationLinksData = {
  __typename?: 'NavigationLinksData';
  _none?: Maybe<Scalars['String']['output']>;
};

/** Default model for creating pages */
export type Page = {
  __typename?: 'Page';
  content?: Maybe<Scalars['JSONObject']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<PageData>;
  endDate?: Maybe<Scalars['Float']['output']>;
  everything?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastUpdated?: Maybe<Scalars['Float']['output']>;
  lastUpdatedBy?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['ID']['output']>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  published?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Array<Maybe<Query>>>;
  screenshot?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Float']['output']>;
  testRatio?: Maybe<Scalars['Int']['output']>;
  variations?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageData = {
  __typename?: 'PageData';
  blocks?: Maybe<Scalars['JSON']['output']>;
  css?: Maybe<Scalars['String']['output']>;
  cssCode?: Maybe<Scalars['String']['output']>;
  customFonts?: Maybe<Scalars['JSON']['output']>;
  /** SEO page description */
  description?: Maybe<Scalars['String']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  httpRequests?: Maybe<Scalars['JSON']['output']>;
  inputs?: Maybe<Scalars['JSON']['output']>;
  jsCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['JSON']['output']>;
  /** SEO page title */
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['JSON']['output']>;
};

export type Query = {
  __typename?: 'Query';
  operator?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Fetch link results */
  link?: Maybe<Array<Maybe<Link>>>;
  /** Fetch navigation-links results */
  navigationLinks?: Maybe<Array<Maybe<NavigationLinks>>>;
  /** Fetch just one link */
  oneLink?: Maybe<Link>;
  /** Fetch just one navigation-links */
  oneNavigationLinks?: Maybe<NavigationLinks>;
  /** Fetch just one page */
  onePage?: Maybe<Page>;
  /** Fetch just one technology-consulting */
  oneTechnologyConsulting?: Maybe<TechnologyConsulting>;
  /** Fetch page results */
  page?: Maybe<Array<Maybe<Page>>>;
  /** Fetch technology-consulting results */
  technologyConsulting?: Maybe<Array<Maybe<TechnologyConsulting>>>;
};


export type RootQueryTypeLinkArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type RootQueryTypeNavigationLinksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type RootQueryTypeOneLinkArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type RootQueryTypeOneNavigationLinksArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type RootQueryTypeOnePageArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type RootQueryTypeOneTechnologyConsultingArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type RootQueryTypePageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type RootQueryTypeTechnologyConsultingArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['JSONObject']['input']>;
  query?: InputMaybe<Scalars['JSONObject']['input']>;
  sort?: InputMaybe<Scalars['JSONObject']['input']>;
  target?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** Technology Consulting section for Technology Consulting Services */
export type TechnologyConsulting = {
  __typename?: 'TechnologyConsulting';
  content?: Maybe<Scalars['JSONObject']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<TechnologyConsultingData>;
  endDate?: Maybe<Scalars['Float']['output']>;
  everything?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastUpdated?: Maybe<Scalars['Float']['output']>;
  lastUpdatedBy?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['ID']['output']>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  published?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Array<Maybe<Query>>>;
  screenshot?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Float']['output']>;
  testRatio?: Maybe<Scalars['Int']['output']>;
  variations?: Maybe<Scalars['JSONObject']['output']>;
};

export type TechnologyConsultingData = {
  __typename?: 'TechnologyConsultingData';
  blocks?: Maybe<Scalars['JSON']['output']>;
  css?: Maybe<Scalars['String']['output']>;
  cssCode?: Maybe<Scalars['String']['output']>;
  customFonts?: Maybe<Scalars['JSON']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  httpRequests?: Maybe<Scalars['JSON']['output']>;
  inputs?: Maybe<Scalars['JSON']['output']>;
  jsCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['JSON']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['JSON']['output']>;
};
