module.exports = {

  base: '/vuepressblog/',
  
  title: 'WQ',
  description: '生活站',
  markdown: {
    lineNumbers: true,
  },
  theme:'reco',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    author: 'WQ',
    authorAvatar: '/gode.jpg',
    type: 'blog',
    logo: '/gode.jpg',
    sidebar: 'auto',
    search: true,
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        
      ]
    },
    //导航栏
    nav: [      
      { text: 'Home', link: '/', icon: 'reco-home', },
      // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
      //时间线
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      
      // 支持嵌套,形成下拉式的导航菜单
      
      {
        text: '语言帮助',
        ariaLabel: 'Language Menu',
        items: [
          { text: '中文', link: '/blog/1.md' },
          { text: '英文', link: 'www.baidu.com' }
        ]
      },
    ],
    //友链
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title:'小弋の阅览室',
        link:'https://lovelijunyi.gitee.io/blog/',
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      }
    ],
    subSidebar: 'auto',
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
    ['@vuepress/medium-zoom'],
    ['@vuepress-reco/vuepress-plugin-pagation'],
    ['@vuepress-reco/vuepress-plugin-loading-page'],
    
    //动态标题
    // [
    //   'dynamic-title',
    //   {
        
    //     showText: "(/≧▽≦/)咦！又好了！",
        
    //     hideText: "(●—●)喔哟，崩溃啦！",
    //     recoverTime: 2000
    //   }
    // ],
    //多彩鼠标
    // ["cursor-effects",
  	//   {
  	//     size: 3,                    // size of the particle, default: 2
  	//     shape: ['circle'],  // shape of the particle, default: 'star'
  	//     zIndex: 999999999           // z-index property of the canvas, default: 999999999
    //   }
    // ],
    [['vuepress-plugin-code-copy', true]],
  ],
  //npm install vuepress-plugin-nuggets-style-copy -D
  //vuepress-reco/vuepress-plugin-loading-page
  //npm install -D @vuepress-reco/vuepress-plugin-loading-page
  //https://beautifulwq.github.io/vuepressblog/
}
