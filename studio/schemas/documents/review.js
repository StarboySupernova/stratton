import { format } from 'date-fns';
import { FaComments } from 'react-icons/fa';

export default {
  title: 'Review',
  name: 'review', // name is the id, which we use to reference this object in code
  type: 'document',
  icon: FaComments,
  fields: [
    {
      title: 'Name',
      name: 'user',
      type: 'string',
    },
    {
      title: 'Restaurant/Service',
      name: 'restaurant',
      type: 'reference',
      to: [{ type: 'blog' }],
    },
    {
      title: 'Tag',
      name: 'slug',
      type: 'slug', // slug is custom type in sanity
      options: {
        source: 'user',
        maxLength: 196,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime', // datetime is a custom type in sanity
    },
    {
      title: 'Review',
      name: 'excerpt',
      type: 'normalText',
      description: 'Describe your experience',
    },
  ],
  preview: {
    // customizing review preview
    select: {
      // selecting which field I want to show on the preview, and preparing them (destructuring the props selected inside preview)
      title: 'user',
      publishedAt: 'publishedAt',
    },
    prepare({ title, publishedAt }) {
      return {
        title,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyy')
          : '',
      };
    },
  },
};
