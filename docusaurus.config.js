const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "DAuth Docs",
  tagline: "대구소프트웨어 고등학교 OAuth Docs",
  url: "http://docs.dauth.b1nd.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Clzzi",
  projectName: "DAuth_Docs",
  themeConfig: {
    navbar: {
      title: "DAuth",
      logo: {
        alt: "DAuth Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "OAuth2.0",
          position: "left",
          label: "OAuth",
        },
        {
          type: "doc",
          docId: "UseDAuth",
          position: "left",
          label: "이용방법",
        },
        {
          type: "doc",
          docId: "Token API",
          position: "left",
          label: "API Docs",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Service",
          items: [
            {
              label: "DAuth",
              href: "http://dauth.b1nd.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "School HomePage",
              href: "http://www.dgsw.hs.kr/index.do",
            },
            {
              label: "DodamDodam",
              href: "http://dodam.b1nd.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Team B1ND",
              href: "https://b1nd.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/Clzzi",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Team B1ND, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
