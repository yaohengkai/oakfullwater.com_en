import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Product Lists',
          href: getPermalink('/products/products'),
        },
        {
          text: 'Transparent water pre-filter',
          href: getPermalink('/products/products#prefilter'),
        },
        {
          text: 'Ultrafiltration water purifier',
          href: getPermalink('/products/products#ultrafiltration'),
        },
        {
          text: 'Electricity-free Reverse Osmosis water purifier',
          href: getPermalink('/products/products#RO-system'),
        },
        {
          text: 'Electricity-free water softener',
          href: getPermalink('/products/products#softerner'),
        },
        {
          text: 'Filter cartridge consumables',
          href: getPermalink('/products/products#cartridges'),
        },
      ],
    },
    {
      text: 'Service Support',
      links: [
        {
          text: 'Resource center',
          href: getPermalink('/support/resources'),
        },
        // {
        //   text: '博客列表',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: '商业场景',
        //   href: getPermalink('/support/commercial'),
        // },
        {
          text: 'Become an agent',
          href: getPermalink('/support/become-agent'),
        },
        {
          text: 'Become a supplier',
          href: getPermalink('/support/become-supplier'),
        },
        // {
        //   text: '成为合伙人',
        //   href: getPermalink('/support/become-partner'),
        // },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'Oakfull',
          href: getPermalink('/about/about'),
        },
        // {
        //   text: '社会责任',
        //   href: getPermalink('/about/responsibility'),
        // },
        {
          text: 'News',
          href: getBlogPermalink(),
        },
        // {
        //   text: '招聘信息',
        //   href: getPermalink('/about/career'),
        // },
        {
          text: 'Contact us',
          href: getPermalink('/about/contact'),
        },
      ],
    },
  ],
  actions: [{ text: '中文 / EN', href: 'https://cn.oakfullwater.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        {
          text: 'Product Lists',
          href: getPermalink('/products/products'),
        },
        {
          text: 'Transparent water pre-filter',
          href: getPermalink('/products/products#prefilter'),
        },
        {
          text: 'Ultrafiltration water purifier',
          href: getPermalink('/products/products#ultrafiltration'),
        },
        {
          text: 'Electricity-free Reverse Osmosis water purifier',
          href: getPermalink('/products/products#RO-system'),
        },
        {
          text: 'Electricity-free water softener',
          href: getPermalink('/products/products#softerner'),
        },
        {
          text: 'Filter cartridge consumables',
          href: getPermalink('/products/products#cartridges'),
        },
      ],
    },
    {
      title: 'Service Support',
      links: [
        {
          text: 'Resource center',
          href: getPermalink('/support/resources'),
        },
        // {
        //   text: '博客列表',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: '商业场景',
        //   href: getPermalink('/support/commercial'),
        // },
        {
          text: 'Become an agent',
          href: getPermalink('/support/become-agent'),
        },
        {
          text: 'Become a supplier',
          href: getPermalink('/support/become-supplier'),
        },
      ],
    },
    {
      title: 'About',
      links: [
        {
          text: 'Oakfull',
          href: getPermalink('/about/about'),
        },
        // {
        //   text: '社会责任',
        //   href: getPermalink('/about/responsibility'),
        // },
        {
          text: 'News',
          href: getBlogPermalink(),
        },
        // {
        //   text: '招聘信息',
        //   href: getPermalink('/about/career'),
        // },
        {
          text: 'Contact us',
          href: getPermalink('/about/contact'),
        },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    // { text: '联系我们' },
    // { text: 'sales@oakfull.cn' },
    // { text: '0532-89975888' },
    // { text: '山东省青岛市黄岛区棋盘山路3号' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/OakfullWater' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/oakfull/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61570145790746' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/yaohengkai/oakfull.cn_en' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/favicons/apple-touch-icon.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600  dark:text-muted" href="https://oakfull.cn/"> Oakfull</a> · All rights reserved.
  `,
};
