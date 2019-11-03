export type Maybe<T> = T | null

export interface DateQueryOperatorInput {
  eq?: Maybe<Date>

  ne?: Maybe<Date>

  gt?: Maybe<Date>

  gte?: Maybe<Date>

  lt?: Maybe<Date>

  lte?: Maybe<Date>

  in?: Maybe<(Maybe<Date>)[]>

  nin?: Maybe<(Maybe<Date>)[]>
}

export interface FloatQueryOperatorInput {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface StringQueryOperatorInput {
  eq?: Maybe<string>

  ne?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>

  regex?: Maybe<string>

  glob?: Maybe<string>
}

export interface IntQueryOperatorInput {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ImageSharpFilterInput {
  fixed?: Maybe<ImageSharpFixedFilterInput>

  resolutions?: Maybe<ImageSharpResolutionsFilterInput>

  fluid?: Maybe<ImageSharpFluidFilterInput>

  sizes?: Maybe<ImageSharpSizesFilterInput>

  original?: Maybe<ImageSharpOriginalFilterInput>

  resize?: Maybe<ImageSharpResizeFilterInput>

  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>
}

export interface ImageSharpFixedFilterInput {
  base64?: Maybe<StringQueryOperatorInput>

  tracedSVG?: Maybe<StringQueryOperatorInput>

  aspectRatio?: Maybe<FloatQueryOperatorInput>

  width?: Maybe<FloatQueryOperatorInput>

  height?: Maybe<FloatQueryOperatorInput>

  src?: Maybe<StringQueryOperatorInput>

  srcSet?: Maybe<StringQueryOperatorInput>

  srcWebp?: Maybe<StringQueryOperatorInput>

  srcSetWebp?: Maybe<StringQueryOperatorInput>

  originalName?: Maybe<StringQueryOperatorInput>
}

export interface ImageSharpResolutionsFilterInput {
  base64?: Maybe<StringQueryOperatorInput>

  tracedSVG?: Maybe<StringQueryOperatorInput>

  aspectRatio?: Maybe<FloatQueryOperatorInput>

  width?: Maybe<FloatQueryOperatorInput>

  height?: Maybe<FloatQueryOperatorInput>

  src?: Maybe<StringQueryOperatorInput>

  srcSet?: Maybe<StringQueryOperatorInput>

  srcWebp?: Maybe<StringQueryOperatorInput>

  srcSetWebp?: Maybe<StringQueryOperatorInput>

  originalName?: Maybe<StringQueryOperatorInput>
}

export interface ImageSharpFluidFilterInput {
  base64?: Maybe<StringQueryOperatorInput>

  tracedSVG?: Maybe<StringQueryOperatorInput>

  aspectRatio?: Maybe<FloatQueryOperatorInput>

  src?: Maybe<StringQueryOperatorInput>

  srcSet?: Maybe<StringQueryOperatorInput>

  srcWebp?: Maybe<StringQueryOperatorInput>

  srcSetWebp?: Maybe<StringQueryOperatorInput>

  sizes?: Maybe<StringQueryOperatorInput>

  originalImg?: Maybe<StringQueryOperatorInput>

  originalName?: Maybe<StringQueryOperatorInput>

  presentationWidth?: Maybe<IntQueryOperatorInput>

  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export interface ImageSharpSizesFilterInput {
  base64?: Maybe<StringQueryOperatorInput>

  tracedSVG?: Maybe<StringQueryOperatorInput>

  aspectRatio?: Maybe<FloatQueryOperatorInput>

  src?: Maybe<StringQueryOperatorInput>

  srcSet?: Maybe<StringQueryOperatorInput>

  srcWebp?: Maybe<StringQueryOperatorInput>

  srcSetWebp?: Maybe<StringQueryOperatorInput>

  sizes?: Maybe<StringQueryOperatorInput>

  originalImg?: Maybe<StringQueryOperatorInput>

  originalName?: Maybe<StringQueryOperatorInput>

  presentationWidth?: Maybe<IntQueryOperatorInput>

  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export interface ImageSharpOriginalFilterInput {
  width?: Maybe<FloatQueryOperatorInput>

  height?: Maybe<FloatQueryOperatorInput>

  src?: Maybe<StringQueryOperatorInput>
}

export interface ImageSharpResizeFilterInput {
  src?: Maybe<StringQueryOperatorInput>

  tracedSVG?: Maybe<StringQueryOperatorInput>

  width?: Maybe<IntQueryOperatorInput>

  height?: Maybe<IntQueryOperatorInput>

  aspectRatio?: Maybe<FloatQueryOperatorInput>

  originalName?: Maybe<StringQueryOperatorInput>
}

export interface NodeFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>
}

export interface NodeFilterListInput {
  elemMatch?: Maybe<NodeFilterInput>
}

export interface InternalFilterInput {
  content?: Maybe<StringQueryOperatorInput>

  contentDigest?: Maybe<StringQueryOperatorInput>

  description?: Maybe<StringQueryOperatorInput>

  fieldOwners?: Maybe<StringQueryOperatorInput>

  ignoreType?: Maybe<BooleanQueryOperatorInput>

  mediaType?: Maybe<StringQueryOperatorInput>

  owner?: Maybe<StringQueryOperatorInput>

  type?: Maybe<StringQueryOperatorInput>
}

export interface BooleanQueryOperatorInput {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface MdxFilterInput {
  rawBody?: Maybe<StringQueryOperatorInput>

  fileAbsolutePath?: Maybe<StringQueryOperatorInput>

  frontmatter?: Maybe<MdxFrontmatterFilterInput>

  body?: Maybe<StringQueryOperatorInput>

  excerpt?: Maybe<StringQueryOperatorInput>

  headings?: Maybe<MdxHeadingMdxFilterListInput>

  html?: Maybe<StringQueryOperatorInput>

  mdxAST?: Maybe<JsonQueryOperatorInput>

  tableOfContents?: Maybe<JsonQueryOperatorInput>

  timeToRead?: Maybe<IntQueryOperatorInput>

  wordCount?: Maybe<MdxWordCountFilterInput>

  fields?: Maybe<MdxFieldsFilterInput>

  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>
}

export interface MdxFrontmatterFilterInput {
  title?: Maybe<StringQueryOperatorInput>

  route?: Maybe<BooleanQueryOperatorInput>

  version?: Maybe<FloatQueryOperatorInput>

  slug?: Maybe<StringQueryOperatorInput>

  author?: Maybe<StringQueryOperatorInput>

  date?: Maybe<DateQueryOperatorInput>
}

export interface MdxHeadingMdxFilterListInput {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>
}

export interface MdxHeadingMdxFilterInput {
  value?: Maybe<StringQueryOperatorInput>

  depth?: Maybe<IntQueryOperatorInput>
}

export interface JsonQueryOperatorInput {
  eq?: Maybe<Json>

  ne?: Maybe<Json>

  in?: Maybe<(Maybe<Json>)[]>

  nin?: Maybe<(Maybe<Json>)[]>

  regex?: Maybe<Json>

  glob?: Maybe<Json>
}

export interface MdxWordCountFilterInput {
  paragraphs?: Maybe<IntQueryOperatorInput>

  sentences?: Maybe<IntQueryOperatorInput>

  words?: Maybe<IntQueryOperatorInput>
}

export interface MdxFieldsFilterInput {
  slug?: Maybe<StringQueryOperatorInput>

  id?: Maybe<StringQueryOperatorInput>

  title?: Maybe<StringQueryOperatorInput>

  author?: Maybe<AuthorJsonFilterInput>

  date?: Maybe<DateQueryOperatorInput>
}

export interface AuthorJsonFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  bio?: Maybe<StringQueryOperatorInput>

  avatar?: Maybe<FileFilterInput>

  twitter?: Maybe<StringQueryOperatorInput>

  github?: Maybe<StringQueryOperatorInput>
}

export interface FileFilterInput {
  birthtime?: Maybe<DateQueryOperatorInput>

  birthtimeMs?: Maybe<FloatQueryOperatorInput>

  sourceInstanceName?: Maybe<StringQueryOperatorInput>

  absolutePath?: Maybe<StringQueryOperatorInput>

  relativePath?: Maybe<StringQueryOperatorInput>

  extension?: Maybe<StringQueryOperatorInput>

  size?: Maybe<IntQueryOperatorInput>

  prettySize?: Maybe<StringQueryOperatorInput>

  modifiedTime?: Maybe<DateQueryOperatorInput>

  accessTime?: Maybe<DateQueryOperatorInput>

  changeTime?: Maybe<DateQueryOperatorInput>

  birthTime?: Maybe<DateQueryOperatorInput>

  root?: Maybe<StringQueryOperatorInput>

  dir?: Maybe<StringQueryOperatorInput>

  base?: Maybe<StringQueryOperatorInput>

  ext?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  relativeDirectory?: Maybe<StringQueryOperatorInput>

  dev?: Maybe<FloatQueryOperatorInput>

  mode?: Maybe<IntQueryOperatorInput>

  nlink?: Maybe<IntQueryOperatorInput>

  uid?: Maybe<IntQueryOperatorInput>

  gid?: Maybe<IntQueryOperatorInput>

  rdev?: Maybe<IntQueryOperatorInput>

  ino?: Maybe<FloatQueryOperatorInput>

  atimeMs?: Maybe<FloatQueryOperatorInput>

  mtimeMs?: Maybe<FloatQueryOperatorInput>

  ctimeMs?: Maybe<FloatQueryOperatorInput>

  atime?: Maybe<DateQueryOperatorInput>

  mtime?: Maybe<DateQueryOperatorInput>

  ctime?: Maybe<DateQueryOperatorInput>

  publicURL?: Maybe<StringQueryOperatorInput>

  childImageSharp?: Maybe<ImageSharpFilterInput>

  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  childMdx?: Maybe<MdxFilterInput>

  childAuthorJson?: Maybe<AuthorJsonFilterInput>
}

export interface DuotoneGradient {
  highlight: string

  shadow: string

  opacity?: Maybe<number>
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>

  turdSize?: Maybe<number>

  alphaMax?: Maybe<number>

  optCurve?: Maybe<boolean>

  optTolerance?: Maybe<number>

  threshold?: Maybe<number>

  blackOnWhite?: Maybe<boolean>

  color?: Maybe<string>

  background?: Maybe<string>
}

export interface FileSortInput {
  fields?: Maybe<(Maybe<FileFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface MdxSortInput {
  fields?: Maybe<(Maybe<MdxFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface MarkdownHeadingFilterListInput {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export interface MarkdownHeadingFilterInput {
  value?: Maybe<StringQueryOperatorInput>

  depth?: Maybe<IntQueryOperatorInput>
}

export interface MarkdownWordCountFilterInput {
  paragraphs?: Maybe<IntQueryOperatorInput>

  sentences?: Maybe<IntQueryOperatorInput>

  words?: Maybe<IntQueryOperatorInput>
}

export interface MarkdownRemarkFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  html?: Maybe<StringQueryOperatorInput>

  htmlAst?: Maybe<JsonQueryOperatorInput>

  excerpt?: Maybe<StringQueryOperatorInput>

  excerptAst?: Maybe<JsonQueryOperatorInput>

  headings?: Maybe<MarkdownHeadingFilterListInput>

  timeToRead?: Maybe<IntQueryOperatorInput>

  tableOfContents?: Maybe<StringQueryOperatorInput>

  wordCount?: Maybe<MarkdownWordCountFilterInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>
}

export interface MarkdownRemarkSortInput {
  fields?: Maybe<(Maybe<MarkdownRemarkFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface ImageSharpSortInput {
  fields?: Maybe<(Maybe<ImageSharpFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface SitePageContextFilterInput {
  slug?: Maybe<StringQueryOperatorInput>

  mdx?: Maybe<SitePageContextMdxFilterInput>

  site?: Maybe<SitePageContextSiteFilterInput>

  previous?: Maybe<SitePageContextPreviousFilterInput>

  next?: Maybe<SitePageContextNextFilterInput>
}

export interface SitePageContextMdxFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  excerpt?: Maybe<StringQueryOperatorInput>

  fields?: Maybe<SitePageContextMdxFieldsFilterInput>

  body?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextMdxFieldsFilterInput {
  slug?: Maybe<StringQueryOperatorInput>

  author?: Maybe<SitePageContextMdxFieldsAuthorFilterInput>

  title?: Maybe<StringQueryOperatorInput>

  date?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextMdxFieldsAuthorFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  bio?: Maybe<StringQueryOperatorInput>

  avatar?: Maybe<SitePageContextMdxFieldsAuthorAvatarFilterInput>
}

export interface SitePageContextMdxFieldsAuthorAvatarFilterInput {
  childImageSharp?: Maybe<SitePageContextMdxFieldsAuthorAvatarChildImageSharpFilterInput>
}

export interface SitePageContextMdxFieldsAuthorAvatarChildImageSharpFilterInput {
  fixed?: Maybe<SitePageContextMdxFieldsAuthorAvatarChildImageSharpFixedFilterInput>
}

export interface SitePageContextMdxFieldsAuthorAvatarChildImageSharpFixedFilterInput {
  src?: Maybe<StringQueryOperatorInput>

  srcSet?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextSiteFilterInput {
  siteMetadata?: Maybe<SitePageContextSiteSiteMetadataFilterInput>
}

export interface SitePageContextSiteSiteMetadataFilterInput {
  title?: Maybe<StringQueryOperatorInput>

  author?: Maybe<StringQueryOperatorInput>

  description?: Maybe<StringQueryOperatorInput>

  siteUrl?: Maybe<StringQueryOperatorInput>

  org?: Maybe<StringQueryOperatorInput>

  contact?: Maybe<StringQueryOperatorInput>

  favicon?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextPreviousFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  excerpt?: Maybe<StringQueryOperatorInput>

  fields?: Maybe<SitePageContextPreviousFieldsFilterInput>

  body?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextPreviousFieldsFilterInput {
  slug?: Maybe<StringQueryOperatorInput>

  author?: Maybe<SitePageContextPreviousFieldsAuthorFilterInput>

  title?: Maybe<StringQueryOperatorInput>

  date?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextPreviousFieldsAuthorFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  bio?: Maybe<StringQueryOperatorInput>

  avatar?: Maybe<SitePageContextPreviousFieldsAuthorAvatarFilterInput>
}

export interface SitePageContextPreviousFieldsAuthorAvatarFilterInput {
  childImageSharp?: Maybe<SitePageContextPreviousFieldsAuthorAvatarChildImageSharpFilterInput>
}

export interface SitePageContextPreviousFieldsAuthorAvatarChildImageSharpFilterInput {
  fixed?: Maybe<SitePageContextPreviousFieldsAuthorAvatarChildImageSharpFixedFilterInput>
}

export interface SitePageContextPreviousFieldsAuthorAvatarChildImageSharpFixedFilterInput {
  src?: Maybe<StringQueryOperatorInput>

  srcSet?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextNextFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  excerpt?: Maybe<StringQueryOperatorInput>

  fields?: Maybe<SitePageContextNextFieldsFilterInput>

  body?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextNextFieldsFilterInput {
  slug?: Maybe<StringQueryOperatorInput>

  author?: Maybe<SitePageContextNextFieldsAuthorFilterInput>

  title?: Maybe<StringQueryOperatorInput>

  date?: Maybe<StringQueryOperatorInput>
}

export interface SitePageContextNextFieldsAuthorFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  bio?: Maybe<StringQueryOperatorInput>

  avatar?: Maybe<SitePageContextNextFieldsAuthorAvatarFilterInput>
}

export interface SitePageContextNextFieldsAuthorAvatarFilterInput {
  childImageSharp?: Maybe<SitePageContextNextFieldsAuthorAvatarChildImageSharpFilterInput>
}

export interface SitePageContextNextFieldsAuthorAvatarChildImageSharpFilterInput {
  fixed?: Maybe<SitePageContextNextFieldsAuthorAvatarChildImageSharpFixedFilterInput>
}

export interface SitePageContextNextFieldsAuthorAvatarChildImageSharpFixedFilterInput {
  src?: Maybe<StringQueryOperatorInput>

  srcSet?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  resolve?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>

  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>

  nodeAPIs?: Maybe<StringQueryOperatorInput>

  browserAPIs?: Maybe<StringQueryOperatorInput>

  ssrAPIs?: Maybe<StringQueryOperatorInput>

  pluginFilepath?: Maybe<StringQueryOperatorInput>

  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export interface SitePluginPluginOptionsFilterInput {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>

  path?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  extensions?: Maybe<StringQueryOperatorInput>

  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>

  classPrefix?: Maybe<StringQueryOperatorInput>

  inlineCodeMarker?: Maybe<StringQueryOperatorInput>

  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>

  showLineNumbers?: Maybe<BooleanQueryOperatorInput>

  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>

  prompt?: Maybe<SitePluginPluginOptionsPromptFilterInput>

  query?: Maybe<StringQueryOperatorInput>

  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>

  short_name?: Maybe<StringQueryOperatorInput>

  start_url?: Maybe<StringQueryOperatorInput>

  background_color?: Maybe<StringQueryOperatorInput>

  theme_color?: Maybe<StringQueryOperatorInput>

  display?: Maybe<StringQueryOperatorInput>

  icon?: Maybe<StringQueryOperatorInput>

  logo?: Maybe<StringQueryOperatorInput>

  appName?: Maybe<StringQueryOperatorInput>

  appDescription?: Maybe<StringQueryOperatorInput>

  developerName?: Maybe<StringQueryOperatorInput>

  dir?: Maybe<StringQueryOperatorInput>

  lang?: Maybe<StringQueryOperatorInput>

  background?: Maybe<StringQueryOperatorInput>

  orientation?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>

  icons?: Maybe<SitePluginPluginOptionsIconsFilterInput>

  modules?: Maybe<StringQueryOperatorInput>

  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export interface SitePluginPluginOptionsPluginsFilterListInput {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>
}

export interface SitePluginPluginOptionsPluginsFilterInput {
  resolve?: Maybe<StringQueryOperatorInput>

  id?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>

  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>

  pluginFilepath?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsFilterInput {
  classPrefix?: Maybe<StringQueryOperatorInput>

  inlineCodeMarker?: Maybe<StringQueryOperatorInput>

  aliases?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput>

  showLineNumbers?: Maybe<BooleanQueryOperatorInput>

  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>

  prompt?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput {
  sh?: Maybe<StringQueryOperatorInput>

  js?: Maybe<StringQueryOperatorInput>

  ts?: Maybe<StringQueryOperatorInput>

  py?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput {
  user?: Maybe<StringQueryOperatorInput>

  host?: Maybe<StringQueryOperatorInput>

  global?: Maybe<BooleanQueryOperatorInput>
}

export interface SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>
}

export interface SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput {
  resolve?: Maybe<StringQueryOperatorInput>

  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>
}

export interface SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput {
  maxWidth?: Maybe<IntQueryOperatorInput>

  pathPrefix?: Maybe<StringQueryOperatorInput>

  wrapperStyle?: Maybe<StringQueryOperatorInput>

  backgroundColor?: Maybe<StringQueryOperatorInput>

  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>

  showCaptions?: Maybe<BooleanQueryOperatorInput>

  markdownCaptions?: Maybe<BooleanQueryOperatorInput>

  withWebp?: Maybe<BooleanQueryOperatorInput>

  tracedSVG?: Maybe<BooleanQueryOperatorInput>

  loading?: Maybe<StringQueryOperatorInput>

  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>
}

export interface SitePluginPluginOptionsAliasesFilterInput {
  sh?: Maybe<StringQueryOperatorInput>

  js?: Maybe<StringQueryOperatorInput>

  ts?: Maybe<StringQueryOperatorInput>

  py?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPluginOptionsPromptFilterInput {
  user?: Maybe<StringQueryOperatorInput>

  host?: Maybe<StringQueryOperatorInput>

  global?: Maybe<BooleanQueryOperatorInput>
}

export interface SitePluginPluginOptionsFeedsFilterListInput {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>
}

export interface SitePluginPluginOptionsFeedsFilterInput {
  query?: Maybe<StringQueryOperatorInput>

  output?: Maybe<StringQueryOperatorInput>

  title?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPluginOptionsIconsFilterInput {
  android?: Maybe<BooleanQueryOperatorInput>

  appleIcon?: Maybe<BooleanQueryOperatorInput>

  appleStartup?: Maybe<BooleanQueryOperatorInput>

  coast?: Maybe<BooleanQueryOperatorInput>

  favicons?: Maybe<BooleanQueryOperatorInput>

  firefox?: Maybe<BooleanQueryOperatorInput>

  opengraph?: Maybe<BooleanQueryOperatorInput>

  twitter?: Maybe<BooleanQueryOperatorInput>

  yandex?: Maybe<BooleanQueryOperatorInput>

  windows?: Maybe<BooleanQueryOperatorInput>
}

export interface SitePluginPackageJsonFilterInput {
  name?: Maybe<StringQueryOperatorInput>

  description?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>

  main?: Maybe<StringQueryOperatorInput>

  author?: Maybe<StringQueryOperatorInput>

  license?: Maybe<StringQueryOperatorInput>

  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>

  keywords?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export interface SitePluginPackageJsonDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>
}

export interface SitePageFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  path?: Maybe<StringQueryOperatorInput>

  internalComponentName?: Maybe<StringQueryOperatorInput>

  component?: Maybe<StringQueryOperatorInput>

  componentChunkName?: Maybe<StringQueryOperatorInput>

  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>

  context?: Maybe<SitePageContextFilterInput>

  pluginCreator?: Maybe<SitePluginFilterInput>

  pluginCreatorId?: Maybe<StringQueryOperatorInput>

  componentPath?: Maybe<StringQueryOperatorInput>
}

export interface SitePageSortInput {
  fields?: Maybe<(Maybe<SitePageFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface SitePluginSortInput {
  fields?: Maybe<(Maybe<SitePluginFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface SiteSiteMetadataFilterInput {
  title?: Maybe<StringQueryOperatorInput>

  author?: Maybe<StringQueryOperatorInput>

  description?: Maybe<StringQueryOperatorInput>

  siteUrl?: Maybe<StringQueryOperatorInput>

  org?: Maybe<StringQueryOperatorInput>

  contact?: Maybe<StringQueryOperatorInput>

  favicon?: Maybe<StringQueryOperatorInput>
}

export interface SiteMappingFilterInput {
  Mdx_fields_author?: Maybe<StringQueryOperatorInput>
}

export interface SiteFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>

  port?: Maybe<IntQueryOperatorInput>

  host?: Maybe<StringQueryOperatorInput>

  mapping?: Maybe<SiteMappingFilterInput>

  polyfill?: Maybe<BooleanQueryOperatorInput>

  pathPrefix?: Maybe<StringQueryOperatorInput>

  buildTime?: Maybe<DateQueryOperatorInput>
}

export interface SiteSortInput {
  fields?: Maybe<(Maybe<SiteFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface DirectoryFilterInput {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  sourceInstanceName?: Maybe<StringQueryOperatorInput>

  absolutePath?: Maybe<StringQueryOperatorInput>

  relativePath?: Maybe<StringQueryOperatorInput>

  extension?: Maybe<StringQueryOperatorInput>

  size?: Maybe<IntQueryOperatorInput>

  prettySize?: Maybe<StringQueryOperatorInput>

  modifiedTime?: Maybe<DateQueryOperatorInput>

  accessTime?: Maybe<DateQueryOperatorInput>

  changeTime?: Maybe<DateQueryOperatorInput>

  birthTime?: Maybe<DateQueryOperatorInput>

  root?: Maybe<StringQueryOperatorInput>

  dir?: Maybe<StringQueryOperatorInput>

  base?: Maybe<StringQueryOperatorInput>

  ext?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  relativeDirectory?: Maybe<StringQueryOperatorInput>

  dev?: Maybe<FloatQueryOperatorInput>

  mode?: Maybe<IntQueryOperatorInput>

  nlink?: Maybe<IntQueryOperatorInput>

  uid?: Maybe<IntQueryOperatorInput>

  gid?: Maybe<IntQueryOperatorInput>

  rdev?: Maybe<IntQueryOperatorInput>

  ino?: Maybe<FloatQueryOperatorInput>

  atimeMs?: Maybe<FloatQueryOperatorInput>

  mtimeMs?: Maybe<FloatQueryOperatorInput>

  ctimeMs?: Maybe<FloatQueryOperatorInput>

  birthtimeMs?: Maybe<FloatQueryOperatorInput>

  atime?: Maybe<DateQueryOperatorInput>

  mtime?: Maybe<DateQueryOperatorInput>

  ctime?: Maybe<DateQueryOperatorInput>

  birthtime?: Maybe<DateQueryOperatorInput>
}

export interface DirectorySortInput {
  fields?: Maybe<(Maybe<DirectoryFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export interface AuthorJsonSortInput {
  fields?: Maybe<(Maybe<AuthorJsonFieldsEnum>)[]>

  order?: (Maybe<SortOrderEnum>)[]
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum FileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterRoute = 'childMdx___frontmatter___route',
  ChildMdxFrontmatterVersion = 'childMdx___frontmatter___version',
  ChildMdxFrontmatterSlug = 'childMdx___frontmatter___slug',
  ChildMdxFrontmatterAuthor = 'childMdx___frontmatter___author',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxFieldsSlug = 'childMdx___fields___slug',
  ChildMdxFieldsId = 'childMdx___fields___id',
  ChildMdxFieldsTitle = 'childMdx___fields___title',
  ChildMdxFieldsAuthorId = 'childMdx___fields___author___id',
  ChildMdxFieldsAuthorChildren = 'childMdx___fields___author___children',
  ChildMdxFieldsAuthorBio = 'childMdx___fields___author___bio',
  ChildMdxFieldsAuthorTwitter = 'childMdx___fields___author___twitter',
  ChildMdxFieldsAuthorGithub = 'childMdx___fields___author___github',
  ChildMdxFieldsDate = 'childMdx___fields___date',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildAuthorJsonId = 'childAuthorJson___id',
  ChildAuthorJsonParentId = 'childAuthorJson___parent___id',
  ChildAuthorJsonParentParentId = 'childAuthorJson___parent___parent___id',
  ChildAuthorJsonParentParentChildren = 'childAuthorJson___parent___parent___children',
  ChildAuthorJsonParentChildren = 'childAuthorJson___parent___children',
  ChildAuthorJsonParentChildrenId = 'childAuthorJson___parent___children___id',
  ChildAuthorJsonParentChildrenChildren = 'childAuthorJson___parent___children___children',
  ChildAuthorJsonParentInternalContent = 'childAuthorJson___parent___internal___content',
  ChildAuthorJsonParentInternalContentDigest = 'childAuthorJson___parent___internal___contentDigest',
  ChildAuthorJsonParentInternalDescription = 'childAuthorJson___parent___internal___description',
  ChildAuthorJsonParentInternalFieldOwners = 'childAuthorJson___parent___internal___fieldOwners',
  ChildAuthorJsonParentInternalIgnoreType = 'childAuthorJson___parent___internal___ignoreType',
  ChildAuthorJsonParentInternalMediaType = 'childAuthorJson___parent___internal___mediaType',
  ChildAuthorJsonParentInternalOwner = 'childAuthorJson___parent___internal___owner',
  ChildAuthorJsonParentInternalType = 'childAuthorJson___parent___internal___type',
  ChildAuthorJsonChildren = 'childAuthorJson___children',
  ChildAuthorJsonChildrenId = 'childAuthorJson___children___id',
  ChildAuthorJsonChildrenParentId = 'childAuthorJson___children___parent___id',
  ChildAuthorJsonChildrenParentChildren = 'childAuthorJson___children___parent___children',
  ChildAuthorJsonChildrenChildren = 'childAuthorJson___children___children',
  ChildAuthorJsonChildrenChildrenId = 'childAuthorJson___children___children___id',
  ChildAuthorJsonChildrenChildrenChildren = 'childAuthorJson___children___children___children',
  ChildAuthorJsonChildrenInternalContent = 'childAuthorJson___children___internal___content',
  ChildAuthorJsonChildrenInternalContentDigest = 'childAuthorJson___children___internal___contentDigest',
  ChildAuthorJsonChildrenInternalDescription = 'childAuthorJson___children___internal___description',
  ChildAuthorJsonChildrenInternalFieldOwners = 'childAuthorJson___children___internal___fieldOwners',
  ChildAuthorJsonChildrenInternalIgnoreType = 'childAuthorJson___children___internal___ignoreType',
  ChildAuthorJsonChildrenInternalMediaType = 'childAuthorJson___children___internal___mediaType',
  ChildAuthorJsonChildrenInternalOwner = 'childAuthorJson___children___internal___owner',
  ChildAuthorJsonChildrenInternalType = 'childAuthorJson___children___internal___type',
  ChildAuthorJsonInternalContent = 'childAuthorJson___internal___content',
  ChildAuthorJsonInternalContentDigest = 'childAuthorJson___internal___contentDigest',
  ChildAuthorJsonInternalDescription = 'childAuthorJson___internal___description',
  ChildAuthorJsonInternalFieldOwners = 'childAuthorJson___internal___fieldOwners',
  ChildAuthorJsonInternalIgnoreType = 'childAuthorJson___internal___ignoreType',
  ChildAuthorJsonInternalMediaType = 'childAuthorJson___internal___mediaType',
  ChildAuthorJsonInternalOwner = 'childAuthorJson___internal___owner',
  ChildAuthorJsonInternalType = 'childAuthorJson___internal___type',
  ChildAuthorJsonBio = 'childAuthorJson___bio',
  ChildAuthorJsonAvatarBirthtime = 'childAuthorJson___avatar___birthtime',
  ChildAuthorJsonAvatarBirthtimeMs = 'childAuthorJson___avatar___birthtimeMs',
  ChildAuthorJsonAvatarSourceInstanceName = 'childAuthorJson___avatar___sourceInstanceName',
  ChildAuthorJsonAvatarAbsolutePath = 'childAuthorJson___avatar___absolutePath',
  ChildAuthorJsonAvatarRelativePath = 'childAuthorJson___avatar___relativePath',
  ChildAuthorJsonAvatarExtension = 'childAuthorJson___avatar___extension',
  ChildAuthorJsonAvatarSize = 'childAuthorJson___avatar___size',
  ChildAuthorJsonAvatarPrettySize = 'childAuthorJson___avatar___prettySize',
  ChildAuthorJsonAvatarModifiedTime = 'childAuthorJson___avatar___modifiedTime',
  ChildAuthorJsonAvatarAccessTime = 'childAuthorJson___avatar___accessTime',
  ChildAuthorJsonAvatarChangeTime = 'childAuthorJson___avatar___changeTime',
  ChildAuthorJsonAvatarBirthTime = 'childAuthorJson___avatar___birthTime',
  ChildAuthorJsonAvatarRoot = 'childAuthorJson___avatar___root',
  ChildAuthorJsonAvatarDir = 'childAuthorJson___avatar___dir',
  ChildAuthorJsonAvatarBase = 'childAuthorJson___avatar___base',
  ChildAuthorJsonAvatarExt = 'childAuthorJson___avatar___ext',
  ChildAuthorJsonAvatarName = 'childAuthorJson___avatar___name',
  ChildAuthorJsonAvatarRelativeDirectory = 'childAuthorJson___avatar___relativeDirectory',
  ChildAuthorJsonAvatarDev = 'childAuthorJson___avatar___dev',
  ChildAuthorJsonAvatarMode = 'childAuthorJson___avatar___mode',
  ChildAuthorJsonAvatarNlink = 'childAuthorJson___avatar___nlink',
  ChildAuthorJsonAvatarUid = 'childAuthorJson___avatar___uid',
  ChildAuthorJsonAvatarGid = 'childAuthorJson___avatar___gid',
  ChildAuthorJsonAvatarRdev = 'childAuthorJson___avatar___rdev',
  ChildAuthorJsonAvatarIno = 'childAuthorJson___avatar___ino',
  ChildAuthorJsonAvatarAtimeMs = 'childAuthorJson___avatar___atimeMs',
  ChildAuthorJsonAvatarMtimeMs = 'childAuthorJson___avatar___mtimeMs',
  ChildAuthorJsonAvatarCtimeMs = 'childAuthorJson___avatar___ctimeMs',
  ChildAuthorJsonAvatarAtime = 'childAuthorJson___avatar___atime',
  ChildAuthorJsonAvatarMtime = 'childAuthorJson___avatar___mtime',
  ChildAuthorJsonAvatarCtime = 'childAuthorJson___avatar___ctime',
  ChildAuthorJsonAvatarPublicUrl = 'childAuthorJson___avatar___publicURL',
  ChildAuthorJsonAvatarChildImageSharpId = 'childAuthorJson___avatar___childImageSharp___id',
  ChildAuthorJsonAvatarChildImageSharpChildren = 'childAuthorJson___avatar___childImageSharp___children',
  ChildAuthorJsonAvatarId = 'childAuthorJson___avatar___id',
  ChildAuthorJsonAvatarParentId = 'childAuthorJson___avatar___parent___id',
  ChildAuthorJsonAvatarParentChildren = 'childAuthorJson___avatar___parent___children',
  ChildAuthorJsonAvatarChildren = 'childAuthorJson___avatar___children',
  ChildAuthorJsonAvatarChildrenId = 'childAuthorJson___avatar___children___id',
  ChildAuthorJsonAvatarChildrenChildren = 'childAuthorJson___avatar___children___children',
  ChildAuthorJsonAvatarInternalContent = 'childAuthorJson___avatar___internal___content',
  ChildAuthorJsonAvatarInternalContentDigest = 'childAuthorJson___avatar___internal___contentDigest',
  ChildAuthorJsonAvatarInternalDescription = 'childAuthorJson___avatar___internal___description',
  ChildAuthorJsonAvatarInternalFieldOwners = 'childAuthorJson___avatar___internal___fieldOwners',
  ChildAuthorJsonAvatarInternalIgnoreType = 'childAuthorJson___avatar___internal___ignoreType',
  ChildAuthorJsonAvatarInternalMediaType = 'childAuthorJson___avatar___internal___mediaType',
  ChildAuthorJsonAvatarInternalOwner = 'childAuthorJson___avatar___internal___owner',
  ChildAuthorJsonAvatarInternalType = 'childAuthorJson___avatar___internal___type',
  ChildAuthorJsonAvatarChildMdxRawBody = 'childAuthorJson___avatar___childMdx___rawBody',
  ChildAuthorJsonAvatarChildMdxFileAbsolutePath = 'childAuthorJson___avatar___childMdx___fileAbsolutePath',
  ChildAuthorJsonAvatarChildMdxBody = 'childAuthorJson___avatar___childMdx___body',
  ChildAuthorJsonAvatarChildMdxExcerpt = 'childAuthorJson___avatar___childMdx___excerpt',
  ChildAuthorJsonAvatarChildMdxHeadings = 'childAuthorJson___avatar___childMdx___headings',
  ChildAuthorJsonAvatarChildMdxHtml = 'childAuthorJson___avatar___childMdx___html',
  ChildAuthorJsonAvatarChildMdxMdxAst = 'childAuthorJson___avatar___childMdx___mdxAST',
  ChildAuthorJsonAvatarChildMdxTableOfContents = 'childAuthorJson___avatar___childMdx___tableOfContents',
  ChildAuthorJsonAvatarChildMdxTimeToRead = 'childAuthorJson___avatar___childMdx___timeToRead',
  ChildAuthorJsonAvatarChildMdxId = 'childAuthorJson___avatar___childMdx___id',
  ChildAuthorJsonAvatarChildMdxChildren = 'childAuthorJson___avatar___childMdx___children',
  ChildAuthorJsonAvatarChildAuthorJsonId = 'childAuthorJson___avatar___childAuthorJson___id',
  ChildAuthorJsonAvatarChildAuthorJsonChildren = 'childAuthorJson___avatar___childAuthorJson___children',
  ChildAuthorJsonAvatarChildAuthorJsonBio = 'childAuthorJson___avatar___childAuthorJson___bio',
  ChildAuthorJsonAvatarChildAuthorJsonTwitter = 'childAuthorJson___avatar___childAuthorJson___twitter',
  ChildAuthorJsonAvatarChildAuthorJsonGithub = 'childAuthorJson___avatar___childAuthorJson___github',
  ChildAuthorJsonTwitter = 'childAuthorJson___twitter',
  ChildAuthorJsonGithub = 'childAuthorJson___github'
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterRoute = 'frontmatter___route',
  FrontmatterVersion = 'frontmatter___version',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterAuthor = 'frontmatter___author',
  FrontmatterDate = 'frontmatter___date',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  FieldsSlug = 'fields___slug',
  FieldsId = 'fields___id',
  FieldsTitle = 'fields___title',
  FieldsAuthorId = 'fields___author___id',
  FieldsAuthorParentId = 'fields___author___parent___id',
  FieldsAuthorParentChildren = 'fields___author___parent___children',
  FieldsAuthorChildren = 'fields___author___children',
  FieldsAuthorChildrenId = 'fields___author___children___id',
  FieldsAuthorChildrenChildren = 'fields___author___children___children',
  FieldsAuthorInternalContent = 'fields___author___internal___content',
  FieldsAuthorInternalContentDigest = 'fields___author___internal___contentDigest',
  FieldsAuthorInternalDescription = 'fields___author___internal___description',
  FieldsAuthorInternalFieldOwners = 'fields___author___internal___fieldOwners',
  FieldsAuthorInternalIgnoreType = 'fields___author___internal___ignoreType',
  FieldsAuthorInternalMediaType = 'fields___author___internal___mediaType',
  FieldsAuthorInternalOwner = 'fields___author___internal___owner',
  FieldsAuthorInternalType = 'fields___author___internal___type',
  FieldsAuthorBio = 'fields___author___bio',
  FieldsAuthorAvatarBirthtime = 'fields___author___avatar___birthtime',
  FieldsAuthorAvatarBirthtimeMs = 'fields___author___avatar___birthtimeMs',
  FieldsAuthorAvatarSourceInstanceName = 'fields___author___avatar___sourceInstanceName',
  FieldsAuthorAvatarAbsolutePath = 'fields___author___avatar___absolutePath',
  FieldsAuthorAvatarRelativePath = 'fields___author___avatar___relativePath',
  FieldsAuthorAvatarExtension = 'fields___author___avatar___extension',
  FieldsAuthorAvatarSize = 'fields___author___avatar___size',
  FieldsAuthorAvatarPrettySize = 'fields___author___avatar___prettySize',
  FieldsAuthorAvatarModifiedTime = 'fields___author___avatar___modifiedTime',
  FieldsAuthorAvatarAccessTime = 'fields___author___avatar___accessTime',
  FieldsAuthorAvatarChangeTime = 'fields___author___avatar___changeTime',
  FieldsAuthorAvatarBirthTime = 'fields___author___avatar___birthTime',
  FieldsAuthorAvatarRoot = 'fields___author___avatar___root',
  FieldsAuthorAvatarDir = 'fields___author___avatar___dir',
  FieldsAuthorAvatarBase = 'fields___author___avatar___base',
  FieldsAuthorAvatarExt = 'fields___author___avatar___ext',
  FieldsAuthorAvatarName = 'fields___author___avatar___name',
  FieldsAuthorAvatarRelativeDirectory = 'fields___author___avatar___relativeDirectory',
  FieldsAuthorAvatarDev = 'fields___author___avatar___dev',
  FieldsAuthorAvatarMode = 'fields___author___avatar___mode',
  FieldsAuthorAvatarNlink = 'fields___author___avatar___nlink',
  FieldsAuthorAvatarUid = 'fields___author___avatar___uid',
  FieldsAuthorAvatarGid = 'fields___author___avatar___gid',
  FieldsAuthorAvatarRdev = 'fields___author___avatar___rdev',
  FieldsAuthorAvatarIno = 'fields___author___avatar___ino',
  FieldsAuthorAvatarAtimeMs = 'fields___author___avatar___atimeMs',
  FieldsAuthorAvatarMtimeMs = 'fields___author___avatar___mtimeMs',
  FieldsAuthorAvatarCtimeMs = 'fields___author___avatar___ctimeMs',
  FieldsAuthorAvatarAtime = 'fields___author___avatar___atime',
  FieldsAuthorAvatarMtime = 'fields___author___avatar___mtime',
  FieldsAuthorAvatarCtime = 'fields___author___avatar___ctime',
  FieldsAuthorAvatarPublicUrl = 'fields___author___avatar___publicURL',
  FieldsAuthorAvatarId = 'fields___author___avatar___id',
  FieldsAuthorAvatarChildren = 'fields___author___avatar___children',
  FieldsAuthorTwitter = 'fields___author___twitter',
  FieldsAuthorGithub = 'fields___author___github',
  FieldsDate = 'fields___date',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  ContextMdxId = 'context___mdx___id',
  ContextMdxExcerpt = 'context___mdx___excerpt',
  ContextMdxFieldsSlug = 'context___mdx___fields___slug',
  ContextMdxFieldsTitle = 'context___mdx___fields___title',
  ContextMdxFieldsDate = 'context___mdx___fields___date',
  ContextMdxBody = 'context___mdx___body',
  ContextSiteSiteMetadataTitle = 'context___site___siteMetadata___title',
  ContextSiteSiteMetadataAuthor = 'context___site___siteMetadata___author',
  ContextSiteSiteMetadataDescription = 'context___site___siteMetadata___description',
  ContextSiteSiteMetadataSiteUrl = 'context___site___siteMetadata___siteUrl',
  ContextSiteSiteMetadataOrg = 'context___site___siteMetadata___org',
  ContextSiteSiteMetadataContact = 'context___site___siteMetadata___contact',
  ContextSiteSiteMetadataFavicon = 'context___site___siteMetadata___favicon',
  ContextPreviousId = 'context___previous___id',
  ContextPreviousExcerpt = 'context___previous___excerpt',
  ContextPreviousFieldsSlug = 'context___previous___fields___slug',
  ContextPreviousFieldsTitle = 'context___previous___fields___title',
  ContextPreviousFieldsDate = 'context___previous___fields___date',
  ContextPreviousBody = 'context___previous___body',
  ContextNextId = 'context___next___id',
  ContextNextExcerpt = 'context___next___excerpt',
  ContextNextFieldsSlug = 'context___next___fields___slug',
  ContextNextFieldsTitle = 'context___next___fields___title',
  ContextNextFieldsDate = 'context___next___fields___date',
  ContextNextBody = 'context___next___body',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsClassPrefix = 'pluginCreator___pluginOptions___classPrefix',
  PluginCreatorPluginOptionsInlineCodeMarker = 'pluginCreator___pluginOptions___inlineCodeMarker',
  PluginCreatorPluginOptionsAliasesSh = 'pluginCreator___pluginOptions___aliases___sh',
  PluginCreatorPluginOptionsAliasesJs = 'pluginCreator___pluginOptions___aliases___js',
  PluginCreatorPluginOptionsAliasesTs = 'pluginCreator___pluginOptions___aliases___ts',
  PluginCreatorPluginOptionsAliasesPy = 'pluginCreator___pluginOptions___aliases___py',
  PluginCreatorPluginOptionsShowLineNumbers = 'pluginCreator___pluginOptions___showLineNumbers',
  PluginCreatorPluginOptionsNoInlineHighlight = 'pluginCreator___pluginOptions___noInlineHighlight',
  PluginCreatorPluginOptionsPromptUser = 'pluginCreator___pluginOptions___prompt___user',
  PluginCreatorPluginOptionsPromptHost = 'pluginCreator___pluginOptions___prompt___host',
  PluginCreatorPluginOptionsPromptGlobal = 'pluginCreator___pluginOptions___prompt___global',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsFeeds = 'pluginCreator___pluginOptions___feeds',
  PluginCreatorPluginOptionsFeedsQuery = 'pluginCreator___pluginOptions___feeds___query',
  PluginCreatorPluginOptionsFeedsOutput = 'pluginCreator___pluginOptions___feeds___output',
  PluginCreatorPluginOptionsFeedsTitle = 'pluginCreator___pluginOptions___feeds___title',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLogo = 'pluginCreator___pluginOptions___logo',
  PluginCreatorPluginOptionsAppName = 'pluginCreator___pluginOptions___appName',
  PluginCreatorPluginOptionsAppDescription = 'pluginCreator___pluginOptions___appDescription',
  PluginCreatorPluginOptionsDeveloperName = 'pluginCreator___pluginOptions___developerName',
  PluginCreatorPluginOptionsDir = 'pluginCreator___pluginOptions___dir',
  PluginCreatorPluginOptionsLang = 'pluginCreator___pluginOptions___lang',
  PluginCreatorPluginOptionsBackground = 'pluginCreator___pluginOptions___background',
  PluginCreatorPluginOptionsOrientation = 'pluginCreator___pluginOptions___orientation',
  PluginCreatorPluginOptionsVersion = 'pluginCreator___pluginOptions___version',
  PluginCreatorPluginOptionsIconsAndroid = 'pluginCreator___pluginOptions___icons___android',
  PluginCreatorPluginOptionsIconsAppleIcon = 'pluginCreator___pluginOptions___icons___appleIcon',
  PluginCreatorPluginOptionsIconsAppleStartup = 'pluginCreator___pluginOptions___icons___appleStartup',
  PluginCreatorPluginOptionsIconsCoast = 'pluginCreator___pluginOptions___icons___coast',
  PluginCreatorPluginOptionsIconsFavicons = 'pluginCreator___pluginOptions___icons___favicons',
  PluginCreatorPluginOptionsIconsFirefox = 'pluginCreator___pluginOptions___icons___firefox',
  PluginCreatorPluginOptionsIconsOpengraph = 'pluginCreator___pluginOptions___icons___opengraph',
  PluginCreatorPluginOptionsIconsTwitter = 'pluginCreator___pluginOptions___icons___twitter',
  PluginCreatorPluginOptionsIconsYandex = 'pluginCreator___pluginOptions___icons___yandex',
  PluginCreatorPluginOptionsIconsWindows = 'pluginCreator___pluginOptions___icons___windows',
  PluginCreatorPluginOptionsModules = 'pluginCreator___pluginOptions___modules',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsClassPrefix = 'pluginOptions___plugins___pluginOptions___classPrefix',
  PluginOptionsPluginsPluginOptionsInlineCodeMarker = 'pluginOptions___plugins___pluginOptions___inlineCodeMarker',
  PluginOptionsPluginsPluginOptionsShowLineNumbers = 'pluginOptions___plugins___pluginOptions___showLineNumbers',
  PluginOptionsPluginsPluginOptionsNoInlineHighlight = 'pluginOptions___plugins___pluginOptions___noInlineHighlight',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  PluginOptionsGatsbyRemarkPluginsOptionsPathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
  PluginOptionsGatsbyRemarkPluginsOptionsWrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
  PluginOptionsGatsbyRemarkPluginsOptionsBackgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
  PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  PluginOptionsGatsbyRemarkPluginsOptionsShowCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsMarkdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsWithWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
  PluginOptionsGatsbyRemarkPluginsOptionsTracedSvg = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
  PluginOptionsGatsbyRemarkPluginsOptionsLoading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
  PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
  PluginOptionsClassPrefix = 'pluginOptions___classPrefix',
  PluginOptionsInlineCodeMarker = 'pluginOptions___inlineCodeMarker',
  PluginOptionsAliasesSh = 'pluginOptions___aliases___sh',
  PluginOptionsAliasesJs = 'pluginOptions___aliases___js',
  PluginOptionsAliasesTs = 'pluginOptions___aliases___ts',
  PluginOptionsAliasesPy = 'pluginOptions___aliases___py',
  PluginOptionsShowLineNumbers = 'pluginOptions___showLineNumbers',
  PluginOptionsNoInlineHighlight = 'pluginOptions___noInlineHighlight',
  PluginOptionsPromptUser = 'pluginOptions___prompt___user',
  PluginOptionsPromptHost = 'pluginOptions___prompt___host',
  PluginOptionsPromptGlobal = 'pluginOptions___prompt___global',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsFeeds = 'pluginOptions___feeds',
  PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
  PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
  PluginOptionsFeedsTitle = 'pluginOptions___feeds___title',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLogo = 'pluginOptions___logo',
  PluginOptionsAppName = 'pluginOptions___appName',
  PluginOptionsAppDescription = 'pluginOptions___appDescription',
  PluginOptionsDeveloperName = 'pluginOptions___developerName',
  PluginOptionsDir = 'pluginOptions___dir',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsBackground = 'pluginOptions___background',
  PluginOptionsOrientation = 'pluginOptions___orientation',
  PluginOptionsVersion = 'pluginOptions___version',
  PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
  PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
  PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
  PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
  PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
  PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
  PluginOptionsIconsOpengraph = 'pluginOptions___icons___opengraph',
  PluginOptionsIconsTwitter = 'pluginOptions___icons___twitter',
  PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
  PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
  PluginOptionsModules = 'pluginOptions___modules',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataOrg = 'siteMetadata___org',
  SiteMetadataContact = 'siteMetadata___contact',
  SiteMetadataFavicon = 'siteMetadata___favicon',
  Port = 'port',
  Host = 'host',
  MappingMdxFieldsAuthor = 'mapping___Mdx_fields_author',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export enum DirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum AuthorJsonFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Bio = 'bio',
  AvatarBirthtime = 'avatar___birthtime',
  AvatarBirthtimeMs = 'avatar___birthtimeMs',
  AvatarSourceInstanceName = 'avatar___sourceInstanceName',
  AvatarAbsolutePath = 'avatar___absolutePath',
  AvatarRelativePath = 'avatar___relativePath',
  AvatarExtension = 'avatar___extension',
  AvatarSize = 'avatar___size',
  AvatarPrettySize = 'avatar___prettySize',
  AvatarModifiedTime = 'avatar___modifiedTime',
  AvatarAccessTime = 'avatar___accessTime',
  AvatarChangeTime = 'avatar___changeTime',
  AvatarBirthTime = 'avatar___birthTime',
  AvatarRoot = 'avatar___root',
  AvatarDir = 'avatar___dir',
  AvatarBase = 'avatar___base',
  AvatarExt = 'avatar___ext',
  AvatarName = 'avatar___name',
  AvatarRelativeDirectory = 'avatar___relativeDirectory',
  AvatarDev = 'avatar___dev',
  AvatarMode = 'avatar___mode',
  AvatarNlink = 'avatar___nlink',
  AvatarUid = 'avatar___uid',
  AvatarGid = 'avatar___gid',
  AvatarRdev = 'avatar___rdev',
  AvatarIno = 'avatar___ino',
  AvatarAtimeMs = 'avatar___atimeMs',
  AvatarMtimeMs = 'avatar___mtimeMs',
  AvatarCtimeMs = 'avatar___ctimeMs',
  AvatarAtime = 'avatar___atime',
  AvatarMtime = 'avatar___mtime',
  AvatarCtime = 'avatar___ctime',
  AvatarPublicUrl = 'avatar___publicURL',
  AvatarChildImageSharpFixedBase64 = 'avatar___childImageSharp___fixed___base64',
  AvatarChildImageSharpFixedTracedSvg = 'avatar___childImageSharp___fixed___tracedSVG',
  AvatarChildImageSharpFixedAspectRatio = 'avatar___childImageSharp___fixed___aspectRatio',
  AvatarChildImageSharpFixedWidth = 'avatar___childImageSharp___fixed___width',
  AvatarChildImageSharpFixedHeight = 'avatar___childImageSharp___fixed___height',
  AvatarChildImageSharpFixedSrc = 'avatar___childImageSharp___fixed___src',
  AvatarChildImageSharpFixedSrcSet = 'avatar___childImageSharp___fixed___srcSet',
  AvatarChildImageSharpFixedSrcWebp = 'avatar___childImageSharp___fixed___srcWebp',
  AvatarChildImageSharpFixedSrcSetWebp = 'avatar___childImageSharp___fixed___srcSetWebp',
  AvatarChildImageSharpFixedOriginalName = 'avatar___childImageSharp___fixed___originalName',
  AvatarChildImageSharpResolutionsBase64 = 'avatar___childImageSharp___resolutions___base64',
  AvatarChildImageSharpResolutionsTracedSvg = 'avatar___childImageSharp___resolutions___tracedSVG',
  AvatarChildImageSharpResolutionsAspectRatio = 'avatar___childImageSharp___resolutions___aspectRatio',
  AvatarChildImageSharpResolutionsWidth = 'avatar___childImageSharp___resolutions___width',
  AvatarChildImageSharpResolutionsHeight = 'avatar___childImageSharp___resolutions___height',
  AvatarChildImageSharpResolutionsSrc = 'avatar___childImageSharp___resolutions___src',
  AvatarChildImageSharpResolutionsSrcSet = 'avatar___childImageSharp___resolutions___srcSet',
  AvatarChildImageSharpResolutionsSrcWebp = 'avatar___childImageSharp___resolutions___srcWebp',
  AvatarChildImageSharpResolutionsSrcSetWebp = 'avatar___childImageSharp___resolutions___srcSetWebp',
  AvatarChildImageSharpResolutionsOriginalName = 'avatar___childImageSharp___resolutions___originalName',
  AvatarChildImageSharpFluidBase64 = 'avatar___childImageSharp___fluid___base64',
  AvatarChildImageSharpFluidTracedSvg = 'avatar___childImageSharp___fluid___tracedSVG',
  AvatarChildImageSharpFluidAspectRatio = 'avatar___childImageSharp___fluid___aspectRatio',
  AvatarChildImageSharpFluidSrc = 'avatar___childImageSharp___fluid___src',
  AvatarChildImageSharpFluidSrcSet = 'avatar___childImageSharp___fluid___srcSet',
  AvatarChildImageSharpFluidSrcWebp = 'avatar___childImageSharp___fluid___srcWebp',
  AvatarChildImageSharpFluidSrcSetWebp = 'avatar___childImageSharp___fluid___srcSetWebp',
  AvatarChildImageSharpFluidSizes = 'avatar___childImageSharp___fluid___sizes',
  AvatarChildImageSharpFluidOriginalImg = 'avatar___childImageSharp___fluid___originalImg',
  AvatarChildImageSharpFluidOriginalName = 'avatar___childImageSharp___fluid___originalName',
  AvatarChildImageSharpFluidPresentationWidth = 'avatar___childImageSharp___fluid___presentationWidth',
  AvatarChildImageSharpFluidPresentationHeight = 'avatar___childImageSharp___fluid___presentationHeight',
  AvatarChildImageSharpSizesBase64 = 'avatar___childImageSharp___sizes___base64',
  AvatarChildImageSharpSizesTracedSvg = 'avatar___childImageSharp___sizes___tracedSVG',
  AvatarChildImageSharpSizesAspectRatio = 'avatar___childImageSharp___sizes___aspectRatio',
  AvatarChildImageSharpSizesSrc = 'avatar___childImageSharp___sizes___src',
  AvatarChildImageSharpSizesSrcSet = 'avatar___childImageSharp___sizes___srcSet',
  AvatarChildImageSharpSizesSrcWebp = 'avatar___childImageSharp___sizes___srcWebp',
  AvatarChildImageSharpSizesSrcSetWebp = 'avatar___childImageSharp___sizes___srcSetWebp',
  AvatarChildImageSharpSizesSizes = 'avatar___childImageSharp___sizes___sizes',
  AvatarChildImageSharpSizesOriginalImg = 'avatar___childImageSharp___sizes___originalImg',
  AvatarChildImageSharpSizesOriginalName = 'avatar___childImageSharp___sizes___originalName',
  AvatarChildImageSharpSizesPresentationWidth = 'avatar___childImageSharp___sizes___presentationWidth',
  AvatarChildImageSharpSizesPresentationHeight = 'avatar___childImageSharp___sizes___presentationHeight',
  AvatarChildImageSharpOriginalWidth = 'avatar___childImageSharp___original___width',
  AvatarChildImageSharpOriginalHeight = 'avatar___childImageSharp___original___height',
  AvatarChildImageSharpOriginalSrc = 'avatar___childImageSharp___original___src',
  AvatarChildImageSharpResizeSrc = 'avatar___childImageSharp___resize___src',
  AvatarChildImageSharpResizeTracedSvg = 'avatar___childImageSharp___resize___tracedSVG',
  AvatarChildImageSharpResizeWidth = 'avatar___childImageSharp___resize___width',
  AvatarChildImageSharpResizeHeight = 'avatar___childImageSharp___resize___height',
  AvatarChildImageSharpResizeAspectRatio = 'avatar___childImageSharp___resize___aspectRatio',
  AvatarChildImageSharpResizeOriginalName = 'avatar___childImageSharp___resize___originalName',
  AvatarChildImageSharpId = 'avatar___childImageSharp___id',
  AvatarChildImageSharpParentId = 'avatar___childImageSharp___parent___id',
  AvatarChildImageSharpParentChildren = 'avatar___childImageSharp___parent___children',
  AvatarChildImageSharpChildren = 'avatar___childImageSharp___children',
  AvatarChildImageSharpChildrenId = 'avatar___childImageSharp___children___id',
  AvatarChildImageSharpChildrenChildren = 'avatar___childImageSharp___children___children',
  AvatarChildImageSharpInternalContent = 'avatar___childImageSharp___internal___content',
  AvatarChildImageSharpInternalContentDigest = 'avatar___childImageSharp___internal___contentDigest',
  AvatarChildImageSharpInternalDescription = 'avatar___childImageSharp___internal___description',
  AvatarChildImageSharpInternalFieldOwners = 'avatar___childImageSharp___internal___fieldOwners',
  AvatarChildImageSharpInternalIgnoreType = 'avatar___childImageSharp___internal___ignoreType',
  AvatarChildImageSharpInternalMediaType = 'avatar___childImageSharp___internal___mediaType',
  AvatarChildImageSharpInternalOwner = 'avatar___childImageSharp___internal___owner',
  AvatarChildImageSharpInternalType = 'avatar___childImageSharp___internal___type',
  AvatarId = 'avatar___id',
  AvatarParentId = 'avatar___parent___id',
  AvatarParentParentId = 'avatar___parent___parent___id',
  AvatarParentParentChildren = 'avatar___parent___parent___children',
  AvatarParentChildren = 'avatar___parent___children',
  AvatarParentChildrenId = 'avatar___parent___children___id',
  AvatarParentChildrenChildren = 'avatar___parent___children___children',
  AvatarParentInternalContent = 'avatar___parent___internal___content',
  AvatarParentInternalContentDigest = 'avatar___parent___internal___contentDigest',
  AvatarParentInternalDescription = 'avatar___parent___internal___description',
  AvatarParentInternalFieldOwners = 'avatar___parent___internal___fieldOwners',
  AvatarParentInternalIgnoreType = 'avatar___parent___internal___ignoreType',
  AvatarParentInternalMediaType = 'avatar___parent___internal___mediaType',
  AvatarParentInternalOwner = 'avatar___parent___internal___owner',
  AvatarParentInternalType = 'avatar___parent___internal___type',
  AvatarChildren = 'avatar___children',
  AvatarChildrenId = 'avatar___children___id',
  AvatarChildrenParentId = 'avatar___children___parent___id',
  AvatarChildrenParentChildren = 'avatar___children___parent___children',
  AvatarChildrenChildren = 'avatar___children___children',
  AvatarChildrenChildrenId = 'avatar___children___children___id',
  AvatarChildrenChildrenChildren = 'avatar___children___children___children',
  AvatarChildrenInternalContent = 'avatar___children___internal___content',
  AvatarChildrenInternalContentDigest = 'avatar___children___internal___contentDigest',
  AvatarChildrenInternalDescription = 'avatar___children___internal___description',
  AvatarChildrenInternalFieldOwners = 'avatar___children___internal___fieldOwners',
  AvatarChildrenInternalIgnoreType = 'avatar___children___internal___ignoreType',
  AvatarChildrenInternalMediaType = 'avatar___children___internal___mediaType',
  AvatarChildrenInternalOwner = 'avatar___children___internal___owner',
  AvatarChildrenInternalType = 'avatar___children___internal___type',
  AvatarInternalContent = 'avatar___internal___content',
  AvatarInternalContentDigest = 'avatar___internal___contentDigest',
  AvatarInternalDescription = 'avatar___internal___description',
  AvatarInternalFieldOwners = 'avatar___internal___fieldOwners',
  AvatarInternalIgnoreType = 'avatar___internal___ignoreType',
  AvatarInternalMediaType = 'avatar___internal___mediaType',
  AvatarInternalOwner = 'avatar___internal___owner',
  AvatarInternalType = 'avatar___internal___type',
  AvatarChildMdxRawBody = 'avatar___childMdx___rawBody',
  AvatarChildMdxFileAbsolutePath = 'avatar___childMdx___fileAbsolutePath',
  AvatarChildMdxFrontmatterTitle = 'avatar___childMdx___frontmatter___title',
  AvatarChildMdxFrontmatterRoute = 'avatar___childMdx___frontmatter___route',
  AvatarChildMdxFrontmatterVersion = 'avatar___childMdx___frontmatter___version',
  AvatarChildMdxFrontmatterSlug = 'avatar___childMdx___frontmatter___slug',
  AvatarChildMdxFrontmatterAuthor = 'avatar___childMdx___frontmatter___author',
  AvatarChildMdxFrontmatterDate = 'avatar___childMdx___frontmatter___date',
  AvatarChildMdxBody = 'avatar___childMdx___body',
  AvatarChildMdxExcerpt = 'avatar___childMdx___excerpt',
  AvatarChildMdxHeadings = 'avatar___childMdx___headings',
  AvatarChildMdxHeadingsValue = 'avatar___childMdx___headings___value',
  AvatarChildMdxHeadingsDepth = 'avatar___childMdx___headings___depth',
  AvatarChildMdxHtml = 'avatar___childMdx___html',
  AvatarChildMdxMdxAst = 'avatar___childMdx___mdxAST',
  AvatarChildMdxTableOfContents = 'avatar___childMdx___tableOfContents',
  AvatarChildMdxTimeToRead = 'avatar___childMdx___timeToRead',
  AvatarChildMdxWordCountParagraphs = 'avatar___childMdx___wordCount___paragraphs',
  AvatarChildMdxWordCountSentences = 'avatar___childMdx___wordCount___sentences',
  AvatarChildMdxWordCountWords = 'avatar___childMdx___wordCount___words',
  AvatarChildMdxFieldsSlug = 'avatar___childMdx___fields___slug',
  AvatarChildMdxFieldsId = 'avatar___childMdx___fields___id',
  AvatarChildMdxFieldsTitle = 'avatar___childMdx___fields___title',
  AvatarChildMdxFieldsDate = 'avatar___childMdx___fields___date',
  AvatarChildMdxId = 'avatar___childMdx___id',
  AvatarChildMdxParentId = 'avatar___childMdx___parent___id',
  AvatarChildMdxParentChildren = 'avatar___childMdx___parent___children',
  AvatarChildMdxChildren = 'avatar___childMdx___children',
  AvatarChildMdxChildrenId = 'avatar___childMdx___children___id',
  AvatarChildMdxChildrenChildren = 'avatar___childMdx___children___children',
  AvatarChildMdxInternalContent = 'avatar___childMdx___internal___content',
  AvatarChildMdxInternalContentDigest = 'avatar___childMdx___internal___contentDigest',
  AvatarChildMdxInternalDescription = 'avatar___childMdx___internal___description',
  AvatarChildMdxInternalFieldOwners = 'avatar___childMdx___internal___fieldOwners',
  AvatarChildMdxInternalIgnoreType = 'avatar___childMdx___internal___ignoreType',
  AvatarChildMdxInternalMediaType = 'avatar___childMdx___internal___mediaType',
  AvatarChildMdxInternalOwner = 'avatar___childMdx___internal___owner',
  AvatarChildMdxInternalType = 'avatar___childMdx___internal___type',
  AvatarChildAuthorJsonId = 'avatar___childAuthorJson___id',
  AvatarChildAuthorJsonParentId = 'avatar___childAuthorJson___parent___id',
  AvatarChildAuthorJsonParentChildren = 'avatar___childAuthorJson___parent___children',
  AvatarChildAuthorJsonChildren = 'avatar___childAuthorJson___children',
  AvatarChildAuthorJsonChildrenId = 'avatar___childAuthorJson___children___id',
  AvatarChildAuthorJsonChildrenChildren = 'avatar___childAuthorJson___children___children',
  AvatarChildAuthorJsonInternalContent = 'avatar___childAuthorJson___internal___content',
  AvatarChildAuthorJsonInternalContentDigest = 'avatar___childAuthorJson___internal___contentDigest',
  AvatarChildAuthorJsonInternalDescription = 'avatar___childAuthorJson___internal___description',
  AvatarChildAuthorJsonInternalFieldOwners = 'avatar___childAuthorJson___internal___fieldOwners',
  AvatarChildAuthorJsonInternalIgnoreType = 'avatar___childAuthorJson___internal___ignoreType',
  AvatarChildAuthorJsonInternalMediaType = 'avatar___childAuthorJson___internal___mediaType',
  AvatarChildAuthorJsonInternalOwner = 'avatar___childAuthorJson___internal___owner',
  AvatarChildAuthorJsonInternalType = 'avatar___childAuthorJson___internal___type',
  AvatarChildAuthorJsonBio = 'avatar___childAuthorJson___bio',
  AvatarChildAuthorJsonAvatarBirthtime = 'avatar___childAuthorJson___avatar___birthtime',
  AvatarChildAuthorJsonAvatarBirthtimeMs = 'avatar___childAuthorJson___avatar___birthtimeMs',
  AvatarChildAuthorJsonAvatarSourceInstanceName = 'avatar___childAuthorJson___avatar___sourceInstanceName',
  AvatarChildAuthorJsonAvatarAbsolutePath = 'avatar___childAuthorJson___avatar___absolutePath',
  AvatarChildAuthorJsonAvatarRelativePath = 'avatar___childAuthorJson___avatar___relativePath',
  AvatarChildAuthorJsonAvatarExtension = 'avatar___childAuthorJson___avatar___extension',
  AvatarChildAuthorJsonAvatarSize = 'avatar___childAuthorJson___avatar___size',
  AvatarChildAuthorJsonAvatarPrettySize = 'avatar___childAuthorJson___avatar___prettySize',
  AvatarChildAuthorJsonAvatarModifiedTime = 'avatar___childAuthorJson___avatar___modifiedTime',
  AvatarChildAuthorJsonAvatarAccessTime = 'avatar___childAuthorJson___avatar___accessTime',
  AvatarChildAuthorJsonAvatarChangeTime = 'avatar___childAuthorJson___avatar___changeTime',
  AvatarChildAuthorJsonAvatarBirthTime = 'avatar___childAuthorJson___avatar___birthTime',
  AvatarChildAuthorJsonAvatarRoot = 'avatar___childAuthorJson___avatar___root',
  AvatarChildAuthorJsonAvatarDir = 'avatar___childAuthorJson___avatar___dir',
  AvatarChildAuthorJsonAvatarBase = 'avatar___childAuthorJson___avatar___base',
  AvatarChildAuthorJsonAvatarExt = 'avatar___childAuthorJson___avatar___ext',
  AvatarChildAuthorJsonAvatarName = 'avatar___childAuthorJson___avatar___name',
  AvatarChildAuthorJsonAvatarRelativeDirectory = 'avatar___childAuthorJson___avatar___relativeDirectory',
  AvatarChildAuthorJsonAvatarDev = 'avatar___childAuthorJson___avatar___dev',
  AvatarChildAuthorJsonAvatarMode = 'avatar___childAuthorJson___avatar___mode',
  AvatarChildAuthorJsonAvatarNlink = 'avatar___childAuthorJson___avatar___nlink',
  AvatarChildAuthorJsonAvatarUid = 'avatar___childAuthorJson___avatar___uid',
  AvatarChildAuthorJsonAvatarGid = 'avatar___childAuthorJson___avatar___gid',
  AvatarChildAuthorJsonAvatarRdev = 'avatar___childAuthorJson___avatar___rdev',
  AvatarChildAuthorJsonAvatarIno = 'avatar___childAuthorJson___avatar___ino',
  AvatarChildAuthorJsonAvatarAtimeMs = 'avatar___childAuthorJson___avatar___atimeMs',
  AvatarChildAuthorJsonAvatarMtimeMs = 'avatar___childAuthorJson___avatar___mtimeMs',
  AvatarChildAuthorJsonAvatarCtimeMs = 'avatar___childAuthorJson___avatar___ctimeMs',
  AvatarChildAuthorJsonAvatarAtime = 'avatar___childAuthorJson___avatar___atime',
  AvatarChildAuthorJsonAvatarMtime = 'avatar___childAuthorJson___avatar___mtime',
  AvatarChildAuthorJsonAvatarCtime = 'avatar___childAuthorJson___avatar___ctime',
  AvatarChildAuthorJsonAvatarPublicUrl = 'avatar___childAuthorJson___avatar___publicURL',
  AvatarChildAuthorJsonAvatarId = 'avatar___childAuthorJson___avatar___id',
  AvatarChildAuthorJsonAvatarChildren = 'avatar___childAuthorJson___avatar___children',
  AvatarChildAuthorJsonTwitter = 'avatar___childAuthorJson___twitter',
  AvatarChildAuthorJsonGithub = 'avatar___childAuthorJson___github',
  Twitter = 'twitter',
  Github = 'github'
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** Node Interface */
export interface Node {
  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal
}

// ====================================================
// Types
// ====================================================

export interface Query {
  file?: Maybe<File>

  allFile: FileConnection

  mdx?: Maybe<Mdx>

  allMdx: MdxConnection

  markdownRemark?: Maybe<MarkdownRemark>

  allMarkdownRemark: MarkdownRemarkConnection

  imageSharp?: Maybe<ImageSharp>

  allImageSharp: ImageSharpConnection

  sitePage?: Maybe<SitePage>

  allSitePage: SitePageConnection

  sitePlugin?: Maybe<SitePlugin>

  allSitePlugin: SitePluginConnection

  site?: Maybe<Site>

  allSite: SiteConnection

  directory?: Maybe<Directory>

  allDirectory: DirectoryConnection

  authorJson?: Maybe<AuthorJson>

  allAuthorJson: AuthorJsonConnection
}

export interface File extends Node {
  birthtime?: Maybe<Date>

  birthtimeMs?: Maybe<number>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  ino?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>

  childImageSharp?: Maybe<ImageSharp>

  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal

  childMdx?: Maybe<Mdx>

  childAuthorJson?: Maybe<AuthorJson>
}

export interface Internal {
  content?: Maybe<string>

  contentDigest: string

  description?: Maybe<string>

  fieldOwners?: Maybe<(Maybe<string>)[]>

  ignoreType?: Maybe<boolean>

  mediaType?: Maybe<string>

  owner: string

  type: string
}

export interface ImageSharp extends Node {
  fixed?: Maybe<ImageSharpFixed>

  resolutions?: Maybe<ImageSharpResolutions>

  fluid?: Maybe<ImageSharpFluid>

  sizes?: Maybe<ImageSharpSizes>

  original?: Maybe<ImageSharpOriginal>

  resize?: Maybe<ImageSharpResize>

  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal
}

export interface ImageSharpFixed {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpResolutions {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpFluid {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpSizes {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpOriginal {
  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>
}

export interface ImageSharpResize {
  src?: Maybe<string>

  tracedSVG?: Maybe<string>

  width?: Maybe<number>

  height?: Maybe<number>

  aspectRatio?: Maybe<number>

  originalName?: Maybe<string>
}

export interface Mdx extends Node {
  rawBody: string

  fileAbsolutePath: string

  frontmatter?: Maybe<MdxFrontmatter>

  body: string

  excerpt: string

  headings?: Maybe<(Maybe<MdxHeadingMdx>)[]>

  html?: Maybe<string>

  mdxAST?: Maybe<Json>

  tableOfContents?: Maybe<Json>

  timeToRead?: Maybe<number>

  wordCount?: Maybe<MdxWordCount>

  fields?: Maybe<MdxFields>

  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal
}

export interface MdxFrontmatter {
  title: string

  route?: Maybe<boolean>

  version?: Maybe<number>

  slug?: Maybe<string>

  author?: Maybe<string>

  date?: Maybe<Date>
}

export interface MdxHeadingMdx {
  value?: Maybe<string>

  depth?: Maybe<number>
}

export interface MdxWordCount {
  paragraphs?: Maybe<number>

  sentences?: Maybe<number>

  words?: Maybe<number>
}

export interface MdxFields {
  slug?: Maybe<string>

  id?: Maybe<string>

  title?: Maybe<string>

  author?: Maybe<AuthorJson>

  date?: Maybe<Date>
}

export interface AuthorJson extends Node {
  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal

  bio?: Maybe<string>

  avatar?: Maybe<File>

  twitter?: Maybe<string>

  github?: Maybe<string>
}

export interface FileConnection {
  totalCount: number

  edges: FileEdge[]

  nodes: File[]

  pageInfo: PageInfo

  distinct: string[]

  group: FileGroupConnection[]
}

export interface FileEdge {
  next?: Maybe<File>

  node: File

  previous?: Maybe<File>
}

export interface PageInfo {
  currentPage: number

  hasPreviousPage: boolean

  hasNextPage: boolean

  itemCount: number

  pageCount: number

  perPage?: Maybe<number>
}

export interface FileGroupConnection {
  totalCount: number

  edges: FileEdge[]

  nodes: File[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface MdxConnection {
  totalCount: number

  edges: MdxEdge[]

  nodes: Mdx[]

  pageInfo: PageInfo

  distinct: string[]

  group: MdxGroupConnection[]
}

export interface MdxEdge {
  next?: Maybe<Mdx>

  node: Mdx

  previous?: Maybe<Mdx>
}

export interface MdxGroupConnection {
  totalCount: number

  edges: MdxEdge[]

  nodes: Mdx[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface MarkdownRemark extends Node {
  id: string

  html?: Maybe<string>

  htmlAst?: Maybe<Json>

  excerpt?: Maybe<string>

  excerptAst?: Maybe<Json>

  headings?: Maybe<(Maybe<MarkdownHeading>)[]>

  timeToRead?: Maybe<number>

  tableOfContents?: Maybe<string>

  wordCount?: Maybe<MarkdownWordCount>

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal
}

export interface MarkdownHeading {
  value?: Maybe<string>

  depth?: Maybe<number>
}

export interface MarkdownWordCount {
  paragraphs?: Maybe<number>

  sentences?: Maybe<number>

  words?: Maybe<number>
}

export interface MarkdownRemarkConnection {
  totalCount: number

  edges: MarkdownRemarkEdge[]

  nodes: MarkdownRemark[]

  pageInfo: PageInfo

  distinct: string[]

  group: MarkdownRemarkGroupConnection[]
}

export interface MarkdownRemarkEdge {
  next?: Maybe<MarkdownRemark>

  node: MarkdownRemark

  previous?: Maybe<MarkdownRemark>
}

export interface MarkdownRemarkGroupConnection {
  totalCount: number

  edges: MarkdownRemarkEdge[]

  nodes: MarkdownRemark[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface ImageSharpConnection {
  totalCount: number

  edges: ImageSharpEdge[]

  nodes: ImageSharp[]

  pageInfo: PageInfo

  distinct: string[]

  group: ImageSharpGroupConnection[]
}

export interface ImageSharpEdge {
  next?: Maybe<ImageSharp>

  node: ImageSharp

  previous?: Maybe<ImageSharp>
}

export interface ImageSharpGroupConnection {
  totalCount: number

  edges: ImageSharpEdge[]

  nodes: ImageSharp[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface SitePage extends Node {
  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal

  path?: Maybe<string>

  internalComponentName?: Maybe<string>

  component?: Maybe<string>

  componentChunkName?: Maybe<string>

  isCreatedByStatefulCreatePages?: Maybe<boolean>

  context?: Maybe<SitePageContext>

  pluginCreator?: Maybe<SitePlugin>

  pluginCreatorId?: Maybe<string>

  componentPath?: Maybe<string>
}

export interface SitePageContext {
  slug?: Maybe<string>

  mdx?: Maybe<SitePageContextMdx>

  site?: Maybe<SitePageContextSite>

  previous?: Maybe<SitePageContextPrevious>

  next?: Maybe<SitePageContextNext>
}

export interface SitePageContextMdx {
  id?: Maybe<string>

  excerpt?: Maybe<string>

  fields?: Maybe<SitePageContextMdxFields>

  body?: Maybe<string>
}

export interface SitePageContextMdxFields {
  slug?: Maybe<string>

  author?: Maybe<SitePageContextMdxFieldsAuthor>

  title?: Maybe<string>

  date?: Maybe<string>
}

export interface SitePageContextMdxFieldsAuthor {
  id?: Maybe<string>

  bio?: Maybe<string>

  avatar?: Maybe<SitePageContextMdxFieldsAuthorAvatar>
}

export interface SitePageContextMdxFieldsAuthorAvatar {
  childImageSharp?: Maybe<SitePageContextMdxFieldsAuthorAvatarChildImageSharp>
}

export interface SitePageContextMdxFieldsAuthorAvatarChildImageSharp {
  fixed?: Maybe<SitePageContextMdxFieldsAuthorAvatarChildImageSharpFixed>
}

export interface SitePageContextMdxFieldsAuthorAvatarChildImageSharpFixed {
  src?: Maybe<string>

  srcSet?: Maybe<string>
}

export interface SitePageContextSite {
  siteMetadata?: Maybe<SitePageContextSiteSiteMetadata>
}

export interface SitePageContextSiteSiteMetadata {
  title?: Maybe<string>

  author?: Maybe<string>

  description?: Maybe<string>

  siteUrl?: Maybe<string>

  org?: Maybe<string>

  contact?: Maybe<string>

  favicon?: Maybe<string>
}

export interface SitePageContextPrevious {
  id?: Maybe<string>

  excerpt?: Maybe<string>

  fields?: Maybe<SitePageContextPreviousFields>

  body?: Maybe<string>
}

export interface SitePageContextPreviousFields {
  slug?: Maybe<string>

  author?: Maybe<SitePageContextPreviousFieldsAuthor>

  title?: Maybe<string>

  date?: Maybe<string>
}

export interface SitePageContextPreviousFieldsAuthor {
  id?: Maybe<string>

  bio?: Maybe<string>

  avatar?: Maybe<SitePageContextPreviousFieldsAuthorAvatar>
}

export interface SitePageContextPreviousFieldsAuthorAvatar {
  childImageSharp?: Maybe<SitePageContextPreviousFieldsAuthorAvatarChildImageSharp>
}

export interface SitePageContextPreviousFieldsAuthorAvatarChildImageSharp {
  fixed?: Maybe<SitePageContextPreviousFieldsAuthorAvatarChildImageSharpFixed>
}

export interface SitePageContextPreviousFieldsAuthorAvatarChildImageSharpFixed {
  src?: Maybe<string>

  srcSet?: Maybe<string>
}

export interface SitePageContextNext {
  id?: Maybe<string>

  excerpt?: Maybe<string>

  fields?: Maybe<SitePageContextNextFields>

  body?: Maybe<string>
}

export interface SitePageContextNextFields {
  slug?: Maybe<string>

  author?: Maybe<SitePageContextNextFieldsAuthor>

  title?: Maybe<string>

  date?: Maybe<string>
}

export interface SitePageContextNextFieldsAuthor {
  id?: Maybe<string>

  bio?: Maybe<string>

  avatar?: Maybe<SitePageContextNextFieldsAuthorAvatar>
}

export interface SitePageContextNextFieldsAuthorAvatar {
  childImageSharp?: Maybe<SitePageContextNextFieldsAuthorAvatarChildImageSharp>
}

export interface SitePageContextNextFieldsAuthorAvatarChildImageSharp {
  fixed?: Maybe<SitePageContextNextFieldsAuthorAvatarChildImageSharpFixed>
}

export interface SitePageContextNextFieldsAuthorAvatarChildImageSharpFixed {
  src?: Maybe<string>

  srcSet?: Maybe<string>
}

export interface SitePlugin extends Node {
  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal

  resolve?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  pluginOptions?: Maybe<SitePluginPluginOptions>

  nodeAPIs?: Maybe<(Maybe<string>)[]>

  browserAPIs?: Maybe<(Maybe<string>)[]>

  ssrAPIs?: Maybe<(Maybe<string>)[]>

  pluginFilepath?: Maybe<string>

  packageJson?: Maybe<SitePluginPackageJson>
}

export interface SitePluginPluginOptions {
  plugins?: Maybe<(Maybe<SitePluginPluginOptionsPlugins>)[]>

  path?: Maybe<string>

  name?: Maybe<string>

  extensions?: Maybe<(Maybe<string>)[]>

  gatsbyRemarkPlugins?: Maybe<(Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>)[]>

  classPrefix?: Maybe<string>

  inlineCodeMarker?: Maybe<string>

  aliases?: Maybe<SitePluginPluginOptionsAliases>

  showLineNumbers?: Maybe<boolean>

  noInlineHighlight?: Maybe<boolean>

  prompt?: Maybe<SitePluginPluginOptionsPrompt>

  query?: Maybe<string>

  feeds?: Maybe<(Maybe<SitePluginPluginOptionsFeeds>)[]>

  short_name?: Maybe<string>

  start_url?: Maybe<string>

  background_color?: Maybe<string>

  theme_color?: Maybe<string>

  display?: Maybe<string>

  icon?: Maybe<string>

  logo?: Maybe<string>

  appName?: Maybe<string>

  appDescription?: Maybe<string>

  developerName?: Maybe<string>

  dir?: Maybe<string>

  lang?: Maybe<string>

  background?: Maybe<string>

  orientation?: Maybe<string>

  version?: Maybe<string>

  icons?: Maybe<SitePluginPluginOptionsIcons>

  modules?: Maybe<(Maybe<string>)[]>

  pathCheck?: Maybe<boolean>
}

export interface SitePluginPluginOptionsPlugins {
  resolve?: Maybe<string>

  id?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>

  pluginFilepath?: Maybe<string>
}

export interface SitePluginPluginOptionsPluginsPluginOptions {
  classPrefix?: Maybe<string>

  inlineCodeMarker?: Maybe<string>

  aliases?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliases>

  showLineNumbers?: Maybe<boolean>

  noInlineHighlight?: Maybe<boolean>

  prompt?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPrompt>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsAliases {
  sh?: Maybe<string>

  js?: Maybe<string>

  ts?: Maybe<string>

  py?: Maybe<string>
}

export interface SitePluginPluginOptionsPluginsPluginOptionsPrompt {
  user?: Maybe<string>

  host?: Maybe<string>

  global?: Maybe<boolean>
}

export interface SitePluginPluginOptionsGatsbyRemarkPlugins {
  resolve?: Maybe<string>

  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>
}

export interface SitePluginPluginOptionsGatsbyRemarkPluginsOptions {
  maxWidth?: Maybe<number>

  pathPrefix?: Maybe<string>

  wrapperStyle?: Maybe<string>

  backgroundColor?: Maybe<string>

  linkImagesToOriginal?: Maybe<boolean>

  showCaptions?: Maybe<boolean>

  markdownCaptions?: Maybe<boolean>

  withWebp?: Maybe<boolean>

  tracedSVG?: Maybe<boolean>

  loading?: Maybe<string>

  disableBgImageOnAlpha?: Maybe<boolean>
}

export interface SitePluginPluginOptionsAliases {
  sh?: Maybe<string>

  js?: Maybe<string>

  ts?: Maybe<string>

  py?: Maybe<string>
}

export interface SitePluginPluginOptionsPrompt {
  user?: Maybe<string>

  host?: Maybe<string>

  global?: Maybe<boolean>
}

export interface SitePluginPluginOptionsFeeds {
  query?: Maybe<string>

  output?: Maybe<string>

  title?: Maybe<string>
}

export interface SitePluginPluginOptionsIcons {
  android?: Maybe<boolean>

  appleIcon?: Maybe<boolean>

  appleStartup?: Maybe<boolean>

  coast?: Maybe<boolean>

  favicons?: Maybe<boolean>

  firefox?: Maybe<boolean>

  opengraph?: Maybe<boolean>

  twitter?: Maybe<boolean>

  yandex?: Maybe<boolean>

  windows?: Maybe<boolean>
}

export interface SitePluginPackageJson {
  name?: Maybe<string>

  description?: Maybe<string>

  version?: Maybe<string>

  main?: Maybe<string>

  author?: Maybe<string>

  license?: Maybe<string>

  dependencies?: Maybe<(Maybe<SitePluginPackageJsonDependencies>)[]>

  devDependencies?: Maybe<(Maybe<SitePluginPackageJsonDevDependencies>)[]>

  peerDependencies?: Maybe<(Maybe<SitePluginPackageJsonPeerDependencies>)[]>

  keywords?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependencies {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface SitePluginPackageJsonDevDependencies {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface SitePluginPackageJsonPeerDependencies {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface SitePageConnection {
  totalCount: number

  edges: SitePageEdge[]

  nodes: SitePage[]

  pageInfo: PageInfo

  distinct: string[]

  group: SitePageGroupConnection[]
}

export interface SitePageEdge {
  next?: Maybe<SitePage>

  node: SitePage

  previous?: Maybe<SitePage>
}

export interface SitePageGroupConnection {
  totalCount: number

  edges: SitePageEdge[]

  nodes: SitePage[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface SitePluginConnection {
  totalCount: number

  edges: SitePluginEdge[]

  nodes: SitePlugin[]

  pageInfo: PageInfo

  distinct: string[]

  group: SitePluginGroupConnection[]
}

export interface SitePluginEdge {
  next?: Maybe<SitePlugin>

  node: SitePlugin

  previous?: Maybe<SitePlugin>
}

export interface SitePluginGroupConnection {
  totalCount: number

  edges: SitePluginEdge[]

  nodes: SitePlugin[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface Site extends Node {
  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal

  siteMetadata?: Maybe<SiteSiteMetadata>

  port?: Maybe<number>

  host?: Maybe<string>

  mapping?: Maybe<SiteMapping>

  polyfill?: Maybe<boolean>

  pathPrefix?: Maybe<string>

  buildTime?: Maybe<Date>
}

export interface SiteSiteMetadata {
  title?: Maybe<string>

  author?: Maybe<string>

  description?: Maybe<string>

  siteUrl?: Maybe<string>

  org?: Maybe<string>

  contact?: Maybe<string>

  favicon?: Maybe<string>
}

export interface SiteMapping {
  Mdx_fields_author?: Maybe<string>
}

export interface SiteConnection {
  totalCount: number

  edges: SiteEdge[]

  nodes: Site[]

  pageInfo: PageInfo

  distinct: string[]

  group: SiteGroupConnection[]
}

export interface SiteEdge {
  next?: Maybe<Site>

  node: Site

  previous?: Maybe<Site>
}

export interface SiteGroupConnection {
  totalCount: number

  edges: SiteEdge[]

  nodes: Site[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface Directory extends Node {
  id: string

  parent?: Maybe<Node>

  children: Node[]

  internal: Internal

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  ino?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
}

export interface DirectoryConnection {
  totalCount: number

  edges: DirectoryEdge[]

  nodes: Directory[]

  pageInfo: PageInfo

  distinct: string[]

  group: DirectoryGroupConnection[]
}

export interface DirectoryEdge {
  next?: Maybe<Directory>

  node: Directory

  previous?: Maybe<Directory>
}

export interface DirectoryGroupConnection {
  totalCount: number

  edges: DirectoryEdge[]

  nodes: Directory[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

export interface AuthorJsonConnection {
  totalCount: number

  edges: AuthorJsonEdge[]

  nodes: AuthorJson[]

  pageInfo: PageInfo

  distinct: string[]

  group: AuthorJsonGroupConnection[]
}

export interface AuthorJsonEdge {
  next?: Maybe<AuthorJson>

  node: AuthorJson

  previous?: Maybe<AuthorJson>
}

export interface AuthorJsonGroupConnection {
  totalCount: number

  edges: AuthorJsonEdge[]

  nodes: AuthorJson[]

  pageInfo: PageInfo

  field: string

  fieldValue?: Maybe<string>
}

// ====================================================
// Arguments
// ====================================================

export interface FileQueryArgs {
  birthtime?: Maybe<DateQueryOperatorInput>

  birthtimeMs?: Maybe<FloatQueryOperatorInput>

  sourceInstanceName?: Maybe<StringQueryOperatorInput>

  absolutePath?: Maybe<StringQueryOperatorInput>

  relativePath?: Maybe<StringQueryOperatorInput>

  extension?: Maybe<StringQueryOperatorInput>

  size?: Maybe<IntQueryOperatorInput>

  prettySize?: Maybe<StringQueryOperatorInput>

  modifiedTime?: Maybe<DateQueryOperatorInput>

  accessTime?: Maybe<DateQueryOperatorInput>

  changeTime?: Maybe<DateQueryOperatorInput>

  birthTime?: Maybe<DateQueryOperatorInput>

  root?: Maybe<StringQueryOperatorInput>

  dir?: Maybe<StringQueryOperatorInput>

  base?: Maybe<StringQueryOperatorInput>

  ext?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  relativeDirectory?: Maybe<StringQueryOperatorInput>

  dev?: Maybe<FloatQueryOperatorInput>

  mode?: Maybe<IntQueryOperatorInput>

  nlink?: Maybe<IntQueryOperatorInput>

  uid?: Maybe<IntQueryOperatorInput>

  gid?: Maybe<IntQueryOperatorInput>

  rdev?: Maybe<IntQueryOperatorInput>

  ino?: Maybe<FloatQueryOperatorInput>

  atimeMs?: Maybe<FloatQueryOperatorInput>

  mtimeMs?: Maybe<FloatQueryOperatorInput>

  ctimeMs?: Maybe<FloatQueryOperatorInput>

  atime?: Maybe<DateQueryOperatorInput>

  mtime?: Maybe<DateQueryOperatorInput>

  ctime?: Maybe<DateQueryOperatorInput>

  publicURL?: Maybe<StringQueryOperatorInput>

  childImageSharp?: Maybe<ImageSharpFilterInput>

  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  childMdx?: Maybe<MdxFilterInput>

  childAuthorJson?: Maybe<AuthorJsonFilterInput>
}
export interface AllFileQueryArgs {
  filter?: Maybe<FileFilterInput>

  sort?: Maybe<FileSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface MdxQueryArgs {
  rawBody?: Maybe<StringQueryOperatorInput>

  fileAbsolutePath?: Maybe<StringQueryOperatorInput>

  frontmatter?: Maybe<MdxFrontmatterFilterInput>

  body?: Maybe<StringQueryOperatorInput>

  excerpt?: Maybe<StringQueryOperatorInput>

  headings?: Maybe<MdxHeadingMdxFilterListInput>

  html?: Maybe<StringQueryOperatorInput>

  mdxAST?: Maybe<JsonQueryOperatorInput>

  tableOfContents?: Maybe<JsonQueryOperatorInput>

  timeToRead?: Maybe<IntQueryOperatorInput>

  wordCount?: Maybe<MdxWordCountFilterInput>

  fields?: Maybe<MdxFieldsFilterInput>

  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>
}
export interface AllMdxQueryArgs {
  filter?: Maybe<MdxFilterInput>

  sort?: Maybe<MdxSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface MarkdownRemarkQueryArgs {
  id?: Maybe<StringQueryOperatorInput>

  html?: Maybe<StringQueryOperatorInput>

  htmlAst?: Maybe<JsonQueryOperatorInput>

  excerpt?: Maybe<StringQueryOperatorInput>

  excerptAst?: Maybe<JsonQueryOperatorInput>

  headings?: Maybe<MarkdownHeadingFilterListInput>

  timeToRead?: Maybe<IntQueryOperatorInput>

  tableOfContents?: Maybe<StringQueryOperatorInput>

  wordCount?: Maybe<MarkdownWordCountFilterInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>
}
export interface AllMarkdownRemarkQueryArgs {
  filter?: Maybe<MarkdownRemarkFilterInput>

  sort?: Maybe<MarkdownRemarkSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface ImageSharpQueryArgs {
  fixed?: Maybe<ImageSharpFixedFilterInput>

  resolutions?: Maybe<ImageSharpResolutionsFilterInput>

  fluid?: Maybe<ImageSharpFluidFilterInput>

  sizes?: Maybe<ImageSharpSizesFilterInput>

  original?: Maybe<ImageSharpOriginalFilterInput>

  resize?: Maybe<ImageSharpResizeFilterInput>

  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>
}
export interface AllImageSharpQueryArgs {
  filter?: Maybe<ImageSharpFilterInput>

  sort?: Maybe<ImageSharpSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface SitePageQueryArgs {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  path?: Maybe<StringQueryOperatorInput>

  internalComponentName?: Maybe<StringQueryOperatorInput>

  component?: Maybe<StringQueryOperatorInput>

  componentChunkName?: Maybe<StringQueryOperatorInput>

  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>

  context?: Maybe<SitePageContextFilterInput>

  pluginCreator?: Maybe<SitePluginFilterInput>

  pluginCreatorId?: Maybe<StringQueryOperatorInput>

  componentPath?: Maybe<StringQueryOperatorInput>
}
export interface AllSitePageQueryArgs {
  filter?: Maybe<SitePageFilterInput>

  sort?: Maybe<SitePageSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface SitePluginQueryArgs {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  resolve?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  version?: Maybe<StringQueryOperatorInput>

  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>

  nodeAPIs?: Maybe<StringQueryOperatorInput>

  browserAPIs?: Maybe<StringQueryOperatorInput>

  ssrAPIs?: Maybe<StringQueryOperatorInput>

  pluginFilepath?: Maybe<StringQueryOperatorInput>

  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}
export interface AllSitePluginQueryArgs {
  filter?: Maybe<SitePluginFilterInput>

  sort?: Maybe<SitePluginSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface SiteQueryArgs {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>

  port?: Maybe<IntQueryOperatorInput>

  host?: Maybe<StringQueryOperatorInput>

  mapping?: Maybe<SiteMappingFilterInput>

  polyfill?: Maybe<BooleanQueryOperatorInput>

  pathPrefix?: Maybe<StringQueryOperatorInput>

  buildTime?: Maybe<DateQueryOperatorInput>
}
export interface AllSiteQueryArgs {
  filter?: Maybe<SiteFilterInput>

  sort?: Maybe<SiteSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface DirectoryQueryArgs {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  sourceInstanceName?: Maybe<StringQueryOperatorInput>

  absolutePath?: Maybe<StringQueryOperatorInput>

  relativePath?: Maybe<StringQueryOperatorInput>

  extension?: Maybe<StringQueryOperatorInput>

  size?: Maybe<IntQueryOperatorInput>

  prettySize?: Maybe<StringQueryOperatorInput>

  modifiedTime?: Maybe<DateQueryOperatorInput>

  accessTime?: Maybe<DateQueryOperatorInput>

  changeTime?: Maybe<DateQueryOperatorInput>

  birthTime?: Maybe<DateQueryOperatorInput>

  root?: Maybe<StringQueryOperatorInput>

  dir?: Maybe<StringQueryOperatorInput>

  base?: Maybe<StringQueryOperatorInput>

  ext?: Maybe<StringQueryOperatorInput>

  name?: Maybe<StringQueryOperatorInput>

  relativeDirectory?: Maybe<StringQueryOperatorInput>

  dev?: Maybe<FloatQueryOperatorInput>

  mode?: Maybe<IntQueryOperatorInput>

  nlink?: Maybe<IntQueryOperatorInput>

  uid?: Maybe<IntQueryOperatorInput>

  gid?: Maybe<IntQueryOperatorInput>

  rdev?: Maybe<IntQueryOperatorInput>

  ino?: Maybe<FloatQueryOperatorInput>

  atimeMs?: Maybe<FloatQueryOperatorInput>

  mtimeMs?: Maybe<FloatQueryOperatorInput>

  ctimeMs?: Maybe<FloatQueryOperatorInput>

  birthtimeMs?: Maybe<FloatQueryOperatorInput>

  atime?: Maybe<DateQueryOperatorInput>

  mtime?: Maybe<DateQueryOperatorInput>

  ctime?: Maybe<DateQueryOperatorInput>

  birthtime?: Maybe<DateQueryOperatorInput>
}
export interface AllDirectoryQueryArgs {
  filter?: Maybe<DirectoryFilterInput>

  sort?: Maybe<DirectorySortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface AuthorJsonQueryArgs {
  id?: Maybe<StringQueryOperatorInput>

  parent?: Maybe<NodeFilterInput>

  children?: Maybe<NodeFilterListInput>

  internal?: Maybe<InternalFilterInput>

  bio?: Maybe<StringQueryOperatorInput>

  avatar?: Maybe<FileFilterInput>

  twitter?: Maybe<StringQueryOperatorInput>

  github?: Maybe<StringQueryOperatorInput>
}
export interface AllAuthorJsonQueryArgs {
  filter?: Maybe<AuthorJsonFilterInput>

  sort?: Maybe<AuthorJsonSortInput>

  skip?: Maybe<number>

  limit?: Maybe<number>
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface FixedImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  base64Width?: Maybe<number>

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  grayscale?: boolean

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: Maybe<number>

  toFormat?: ImageFormat

  toFormatBase64?: ImageFormat

  cropFocus?: ImageCropFocus

  fit?: ImageFit

  background?: string

  rotate?: number

  trim?: number
}
export interface ResolutionsImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  base64Width?: Maybe<number>

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  grayscale?: boolean

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: Maybe<number>

  toFormat?: ImageFormat

  toFormatBase64?: ImageFormat

  cropFocus?: ImageCropFocus

  fit?: ImageFit

  background?: string

  rotate?: number

  trim?: number
}
export interface FluidImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  base64Width?: Maybe<number>

  grayscale?: boolean

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: Maybe<number>

  toFormat?: ImageFormat

  toFormatBase64?: ImageFormat

  cropFocus?: ImageCropFocus

  fit?: ImageFit

  background?: string

  rotate?: number

  trim?: number

  sizes?: string
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface SizesImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  base64Width?: Maybe<number>

  grayscale?: boolean

  jpegProgressive?: boolean

  pngCompressionSpeed?: number

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: Maybe<number>

  toFormat?: ImageFormat

  toFormatBase64?: ImageFormat

  cropFocus?: ImageCropFocus

  fit?: ImageFit

  background?: string

  rotate?: number

  trim?: number

  sizes?: string
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface ResizeImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  quality?: Maybe<number>

  jpegProgressive?: boolean

  pngCompressionLevel?: number

  pngCompressionSpeed?: number

  grayscale?: boolean

  duotone?: Maybe<DuotoneGradient>

  base64?: boolean

  traceSVG?: Maybe<Potrace>

  toFormat?: ImageFormat

  cropFocus?: ImageCropFocus

  fit?: ImageFit

  background?: string

  rotate?: number

  trim?: number
}
export interface ExcerptMdxArgs {
  pruneLength?: number
}
export interface HeadingsMdxArgs {
  depth?: Maybe<HeadingsMdx>
}
export interface TableOfContentsMdxArgs {
  maxDepth?: Maybe<number>
}
export interface DateMdxFrontmatterArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DateMdxFieldsArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctFileConnectionArgs {
  field: FileFieldsEnum
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: FileFieldsEnum
}
export interface DistinctMdxConnectionArgs {
  field: MdxFieldsEnum
}
export interface GroupMdxConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: MdxFieldsEnum
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number

  truncate?: boolean

  format?: MarkdownExcerptFormats
}
export interface ExcerptAstMarkdownRemarkArgs {
  pruneLength?: number

  truncate?: boolean
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: Maybe<MarkdownHeadingLevels>
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string

  maxDepth?: Maybe<number>

  heading?: Maybe<string>
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field: MarkdownRemarkFieldsEnum
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: MarkdownRemarkFieldsEnum
}
export interface DistinctImageSharpConnectionArgs {
  field: ImageSharpFieldsEnum
}
export interface GroupImageSharpConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: ImageSharpFieldsEnum
}
export interface DistinctSitePageConnectionArgs {
  field: SitePageFieldsEnum
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: SitePageFieldsEnum
}
export interface DistinctSitePluginConnectionArgs {
  field: SitePluginFieldsEnum
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: SitePluginFieldsEnum
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctSiteConnectionArgs {
  field: SiteFieldsEnum
}
export interface GroupSiteConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: SiteFieldsEnum
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens. */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' `fromNow` function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to "milliseconds" but you can also pass in as the measurement "years", "months", "weeks", "days", "hours", "minutes", and "seconds". */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctDirectoryConnectionArgs {
  field: DirectoryFieldsEnum
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: DirectoryFieldsEnum
}
export interface DistinctAuthorJsonConnectionArgs {
  field: AuthorJsonFieldsEnum
}
export interface GroupAuthorJsonConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field: AuthorJsonFieldsEnum
}
