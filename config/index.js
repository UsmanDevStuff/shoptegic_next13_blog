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
  author: 'Muhammad Usman & Wasif Hameed',
  pages: {
    home: {
      title: 'ShopTegic Blog | U & W',
      description:
        "ShopTegic Blog created and managed by Muhammad Usman & Wasif Hameed. Here you can find all latest information about e-commerce, technologies, and personal experiences, full mentorship to get you started with your first business and start earning.",
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
    repoId: '650935907',
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
    'E-Commerce',
    'Personal Experiences',
    'Technology',
    'Best Products',
    'Reviews',
    'Cryptocurrency',
    'Future Technologies',
  ],
};

module.exports = { blogConfig };
