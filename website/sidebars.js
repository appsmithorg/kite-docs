/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      link: { type: 'doc', id: 'get-started/README' },
      items: [
        'get-started/quickstart',
        'get-started/how-kite-works',
      ],
    },
    {
      type: 'category',
      label: 'Building & Editing',
      link: { type: 'doc', id: 'building/README' },
      items: [
        'building/editing-your-site',
        'building/images-and-logos',
        'building/fonts-and-media',
        'building/responsive-design',
        'building/pages-and-navigation',
        'building/templates-and-duplicating',
      ],
    },
    {
      type: 'category',
      label: 'Publishing',
      link: { type: 'doc', id: 'publishing/README' },
      items: [
        'publishing/how-to-publish',
        'publishing/your-kite-url',
        'publishing/changes-not-showing',
        'publishing/unpublish',
        'publishing/publish-failures',
      ],
    },
    {
      type: 'category',
      label: 'Custom Domains & DNS',
      link: { type: 'doc', id: 'custom-domains/README' },
      items: [
        'custom-domains/connect-a-custom-domain',
        'custom-domains/registrar-guides',
        'custom-domains/www-vs-root',
        'custom-domains/transfer-and-email',
        'custom-domains/switch-or-reuse-domain',
        'custom-domains/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'SEO & Discoverability',
      link: { type: 'doc', id: 'seo/README' },
      items: [
        'seo/seo-basics',
        'seo/sitemap-and-robots',
        'seo/social-previews',
        'seo/migrate-existing-site',
      ],
    },
    {
      type: 'category',
      label: 'Forms & Integrations',
      link: { type: 'doc', id: 'forms-integrations/README' },
      items: [
        'forms-integrations/contact-forms',
        'forms-integrations/chat-and-scripts',
        'forms-integrations/analytics',
        'forms-integrations/integrations',
      ],
    },
    {
      type: 'category',
      label: 'Plans, Pricing & Credits',
      link: { type: 'doc', id: 'pricing-credits/README' },
      items: [
        'pricing-credits/how-credits-work',
        'pricing-credits/buy-credits',
        'pricing-credits/plans-and-trial',
        'pricing-credits/manage-subscription',
        'pricing-credits/remove-kite-badge',
      ],
    },
    {
      type: 'category',
      label: 'Account & Settings',
      link: { type: 'doc', id: 'account/README' },
      items: [
        'account/login-and-signup',
        'account/delete-account',
        'account/export-your-site',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: { type: 'doc', id: 'troubleshooting/README' },
      items: [
        'troubleshooting/preview-not-loading',
        'troubleshooting/editor-frozen',
        'troubleshooting/version-history',
        'troubleshooting/database-ssl',
        'troubleshooting/email-sending',
      ],
    },
  ],
};

export default sidebars;
