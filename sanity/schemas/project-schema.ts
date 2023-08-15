const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tool'}}]
    }
  ]
}

export default project;