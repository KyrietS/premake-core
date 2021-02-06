module.exports = {
  title: 'Premake',
  tagline: 'Powerfully simple build configuration',
  url: 'https://kyriets.github.io',
  baseUrl: '/premake-core/',
  onBrokenLinks: 'warn', // FIXME: when docs are ready change it to 'throw'
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/premake-logo.png', // FIXME: make actual favicon.ico file
  organizationName: 'premake',
  projectName: 'premake-core',
  themeConfig: {
  prism: {
    additionalLanguages: ['lua'],
  },
    navbar: {
      title: 'Premake',
      logo: {
        alt: 'Premake Logo',
        src: 'img/premake-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
        to: '/download',
        label: 'Download',
        position: 'left'
        },
        {
          href: 'https://github.com/premake/premake-core',
          label: 'GitHub',
          position: 'left',
        },
        {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Premake 5.0',
              to: 'docs/',
            },
            {
              label: 'Premake 4.x',
              to: 'docs/4.x/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Who uses Premake',
              href: '/docs/Who-Uses-Premake',
            },
            {
              label: 'StackOverflow',
              href: 'https://stackoverflow.com/questions/tagged/premake',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/premakeapp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/premake/premake-core/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Premake`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/premake/premake-core/edit/master/website/',
          lastVersion: "current",
          versions: {
            current: {
              label: "5.0",
              path: ""
            }
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
