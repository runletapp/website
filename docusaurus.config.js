module.exports = {
  title: 'Runlet',
  tagline: 'A cloud-based job manager that integrates your devices',
  url: 'https://runlet.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'runletapp', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
    // gtag: {
    //   trackingID: 'UA-',
    // },
    // algolia: {
    //   apiKey: 'be3d58e5001e0becb68cd83f0914980f',
    //   indexName: 'runlet',
    //   appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    //   algoliaOptions: {}, // Optional, if provided by Algolia
    // },
    navbar: {
      hideOnScroll: false,
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
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Documentation',
              to: 'docs',
            },
            {
              label: 'Releases',
              href: 'https://github.com/runletapp/runlet/releases',
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
              label: 'Twitter',
              href: 'https://twitter.com/runletapp',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Runlet Logo',
      //   src: 'img/logo.svg',
      //   href: 'https://runlet.app',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Runlet. <br/> All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/runletapp/docusaurus/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/runletapp/docusaurus/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
