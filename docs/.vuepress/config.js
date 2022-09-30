module.exports = ctx => ({
    dest: 'vuepress',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'v-formly',
            description: 'v-formly is a dynamic (JSON powered) form library for vue.'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'v-formly',
            description: 'v-formly是vue的动态（JSON驱动）表单库。'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // theme: '@vuepress/vue',
    themeConfig: {
        repo: 'KevinZhang19870314/v-formly',
        editLinks: true,
        docsDir: 'docs',
        // #697 Provided by the official algolia team.
        // algolia: ctx.isProd ? ({
        //     apiKey: '3a539aab83105f01761a137c61004d85',
        //     indexName: 'vuepress',
        //     algoliaOptions: {
        //         facetFilters: ['tags:v1']
        //     }
        // }) : null,
        smoothScroll: true,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                // nav: require('./nav/en'),
                nav: [
                    {
                        text: 'Guide',
                        link: '/guide/'
                    },
                    {
                        text: 'Config Reference',
                        link: '/config/'
                    }
                ],
                sidebar: {
                    '/guide/': getGuideSidebar('Guide', 'Advanced'),
                    '/config/': getConfigSidebar(),
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                // nav: require('./nav/zh'),
                nav: [
                    {
                        text: '指南',
                        link: '/zh/guide/'
                    },
                    {
                        text: '配置',
                        link: '/zh/config/'
                    }
                ],
                sidebar: {
                    '/zh/guide/': getGuideSidebar('指南', '深入'),
                    '/zh/config/': getConfigSidebar(),
                }
            }
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>'
        }],
    ],
    // extraWatchFiles: [
    //     '.vuepress/nav/en.js',
    //     '.vuepress/nav/zh.js'
    // ]
})

function getConfigSidebar() {
    return [
        'cli',
        'node'
    ]
}

function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'directory-structure',
                'basic-config',
                'assets',
                'markdown',
                'using-vue',
                'i18n',
                'deploy'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'frontmatter',
                'permalinks',
                'markdown-slot',
                'global-computed'
            ]
        }
    ]
}