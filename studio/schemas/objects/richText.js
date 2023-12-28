export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        // setting up and segregating the only styles that we want when formatting text in creating a new blog
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [
        // setting up and customizing the lists we will see in creating blog posts. Title is what the user will see when they hover over the controls
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          // setting up and segregating the only text decorators we want to see in creating a blog post
          { title: 'Bolden', value: 'strong' },
          { title: 'Italicize', value: 'em' }, // em from the html tag
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Create link',
            name: 'link',
            type: 'object', // this is line the Any type in Swift
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
