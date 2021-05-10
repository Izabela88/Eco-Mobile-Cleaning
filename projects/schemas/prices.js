export default {
  name: 'cards',
  title: 'Cards',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },

    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
};
