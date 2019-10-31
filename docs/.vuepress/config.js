module.exports = {
  "title": "DimitriYoon",
  "description": "DimitriYoon的博客",
  "dest": "public",
  "base":"/DimitriYoon-blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    repo: 'Abandoned9/documents',
    valineConfig: {
      appId: 'dcVkWSazsvS7d1Hc0Iw35sHb-gzGzoHsz',// your appId
      appKey: 'XWGboWpsXp2ccSee6nYCidT3', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "联系方式",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Abandoned9",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/head.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "最后更新",
    "author": "DimitriYoon",
    "record": "暂无",
    "startYear": "2019",
    faceImage: '/head.jpg'
  },
  "markdown": {
    "lineNumbers": true
  }
}