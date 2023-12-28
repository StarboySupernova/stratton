import { MdImage } from 'react-icons/md';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true, // to enable user to specify which part of their image ought ot be visible on all sizes of the image
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error("Alt text can't be empty").required(),
      options: {
        isHighlighted: true, // not quite sure what this option does
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
    },
  },
};
