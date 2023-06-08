// @ts-check

/**
 * The blog's configuration. Start here after cloning the repo.
 * Hovering over the properties (in an editor like VSCode) will provide additional information about them.
 */

/** @type {import('./types').BlogConfig} */
const blogConfig = {
  url: 'https://shoptegic.vercel.app',
  title: '‹shoptegic/blog›',
  titleParts: ['shoptegic', 'blog'],
  author: 'Muhammad Usman',
  pages: {
    home: {
      title: 'ShopTegic Blog | Muhammad Usman',
      description:
        "My name is Usman and I'm a Full Stack Developer. Welcome to my dev blog! I write about Web Development and other topics I'm interested in.",
    },
    posts: {
      url: '/posts',
      title: 'Posts',
      description:
        "All blog posts. I write about e-commerse and other topics I'm interested in.",
    },
  },
  theme: {
    accentColor: {
      light: '#be123c',
      dark: '#fda4af',
    },
    codeBlockTheme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  giscus: {
    repo: 'kfirfitousi/blog',
    repoId: 'R_kgDOIcM7JA',
    category: 'Comments',
    categoryId: 'DIC_kwDOIcM7JM4CTdK0',
    mapping: 'title',
    theme: {
      light: 'light',
      dark: 'dark_dimmed',
    },
  },
  footerLinks: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/entpnrusman',
    linkedin: 'https://www.linkedin.com/',
    email: 'business@shop-tegic.com',
    storybook: 'https://story.shop-tegic.com',
    buyMeACoffee: 'https://buymeacoffee.com/entpnrusman',
  },
  topics: [
    'Web Development',
    'React',
    'TypeScript',
    'Next.js',
    'Rust',
    'Design',
    'Computer Vision',
  ],
};

module.exports = { blogConfig };
