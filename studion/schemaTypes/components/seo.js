export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Title should be under 60 characters'),
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) => Rule.max(160).warning('Description should be under 160 characters'),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'image',
      title: 'Social Media Share Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
