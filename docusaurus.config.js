module.exports = {
  title: 'Runlet',
  tagline: 'A cloud-based job manager that integrates your devices',
  url: 'https://runletapp.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'runletapp', // Usually your GitHub org/user name.
  projectName: 'runletapp.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    image: 'img/runlet.png',
    navbar: {
      hideOnScroll: false,
      // title: 'Runlet',
      logo: {
        alt: 'Runlet Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/runletapp/runlet',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub Repository',
        },
      ],
    },
    footer: {
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
              to: 'docs/policies/terms',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/policies/privacy',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Docs',
              to: 'docs',
            },
            {
              label: 'Releases',
              href: 'https://github.com/runletapp/runlet/releases',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/runletapp/runlet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/runletapp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Runlet. All rights reserved.`,
    },
    googleAnalytics: {
      trackingID: 'UA-132764481-1',
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: 'be3d58e5001e0becb68cd83f0914980f',
      indexName: 'runlet',
      appId: '57UV1WGQ5Q',
    },
  },
  plugins: ['docusaurus-plugin-sass', '@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/runletapp/docusaurus/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // editUrl: 'https://github.com/runletapp/docusaurus/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
