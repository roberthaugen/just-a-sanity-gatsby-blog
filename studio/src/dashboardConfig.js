export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9de025136d39286215f966',
                  title: 'Sanity Studio',
                  name: 'just-a-sanity-gatsby-blog-studio',
                  apiId: '98b35f0f-18f3-4e50-9a91-6a54c3768cbd'
                },
                {
                  buildHookId: '5e9de025c31fbdb7fbc7f9b4',
                  title: 'Blog Website',
                  name: 'just-a-sanity-gatsby-blog',
                  apiId: 'b34dde2a-9da7-4d51-8972-01ebe0e2f238'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roberthaugen/just-a-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://just-a-sanity-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
