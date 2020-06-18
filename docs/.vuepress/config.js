module.exports = {
  title: 'Python3',
  // description: 'Hello, Object-c',
  head: [
      ['link', {
          rel: 'icon',
          href: `/favicon.ico`
      }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese' },
      //     { text: 'English', link: '/language/english' }
      //   ]
      // },
    ],
// sidebarDepth: 2,
sidebar: [
  {
    title: '雑記',
    // collapsable: false,
    children: [
      '/chapter1/',
      '/chapter1/apply',
      '/chapter1/word']
  },         
        
  {
    title: '安裝',
    // collapsable: false,
    children: [
      '/chapter2/',
      '/chapter2/hello',
    ]
  },         
        
]
},

}