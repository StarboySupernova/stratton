export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bolden', value: 'strong' },
          { title: 'Italicize', value: 'em' },
        ],
        annotations: [
          {
            title: 'Create link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Additional Notes (Optional)',
                name: 'note',
                type: 'string',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'customCode',
    },
    {
      type: 'customImage',
    },
  ],
};
