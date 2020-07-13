module.exports = {
  title: 'Runlet',
  tagline: 'A cloud-based job manager that integrates your devices.',
  url: 'https://runlet.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'runletapp', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    // algolia: {
    //   apiKey: 'api-key',
    //   indexName: 'index-name',
    //   appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    //   algoliaOptions: {}, // Optional, if provided by Algolia
    // },
    navbar: {
      title: 'Runlet',
      logo: {
        alt: 'Runlet Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://github.com/runletapp/runlet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Runlet',
          items: [
            {
              label: 'FAQ',
              to: 'docs/faq',
            },
            {
              label: 'Terms of Service',
              to: 'docs/terms',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/privacy',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Docs',
              to: 'docs',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Issues',
              href: 'https://github.com/runletapp/runlet/issues',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/runletapp/runlet',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/runlet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/runletapp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Runlet. All rights reserved. <br/> Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/runletapp/docusaurus/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/runletapp/docusaurus/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
