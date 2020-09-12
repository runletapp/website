module.exports = {
  title: "Runlet",
  tagline: "A cloud-based job manager that integrates your devices",
  url: "https://runletapp.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "runletapp", // Usually your GitHub org/user name.
  projectName: "runletapp.github.io", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/runlet.png",
    navbar: {
      hideOnScroll: false,
      title: "Runlet",
      logo: {
        alt: "Runlet Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/runletapp/runlet",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Runlet",
          items: [
            {
              label: "FAQ",
              to: "docs/faq",
            },
            {
              label: "Terms of Service",
              to: "docs/policies/terms",
            },
            {
              label: "Privacy Policy",
              to: "docs/policies/privacy",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Docs",
              to: "docs",
            },
            {
              label: "Releases",
              href: "https://github.com/runletapp/runlet/releases",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/runletapp/runlet",
            },
            {
              label: "Gitter",
              href: "https://gitter.im/runletapp",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/runletapp",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Runlet. All rights reserved.`,
    },
    googleAnalytics: {
      trackingID: "UA-132764481-1",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: "09724729b4ec048fc1aa41a08cbcfa03",
      indexName: "runlet",
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/runletapp/website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/runletapp/website/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
