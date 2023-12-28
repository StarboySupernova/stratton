import { MdPerson } from 'react-icons/md';

export default {
  name: 'author',
  title: 'Proprietor',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'customImage',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};
