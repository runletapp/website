/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Runlet",
  tagline: "A cloud-based job manager that integrates your devices",
  url: "https://runletapp.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "runletapp",
  projectName: "runletapp.github.io",
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/runlet.png",
    navbar: {
      hideOnScroll: true,
      title: "Runlet",
      logo: {
        alt: "Runlet Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
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
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/runletapp/website/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/runletapp/website/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleAnalytics: {
          trackingID: "UA-132764481-1",
          anonymizeIP: true,
        },
      },
    ],
  ],
}

module.exports = config
