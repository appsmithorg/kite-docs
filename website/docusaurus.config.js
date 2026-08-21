// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kite',
  tagline: 'Help center for Kite, your AI marketer in Slack',
  favicon: 'img/favicon.png',

  url: 'https://docs.kite.ai',
  baseUrl: '/',

  organizationName: 'kite',
  projectName: 'kite-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      // Offline/local search: builds the search index from Markdown at build
      // time. No external service or credentials required.
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        // Docs are served at the site root (see routeBasePath below).
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Site-wide metadata. Page-level frontmatter `description` overrides the
      // description tag on individual docs pages; this is the default for every
      // page and the value crawlers see on the homepage.
      metadata: [
        {
          name: 'description',
          content:
            'Kite is your AI marketer in Slack. It researches your business, builds a growth strategy, and ships the work that brings you new customers.',
        },
      ],
      image: 'img/social-card.png',
      navbar: {
        logo: {
          alt: 'Kite Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://kite.ai',
            label: 'Try Kite',
            position: 'right',
            className: 'navbar-try-button',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Kite`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
