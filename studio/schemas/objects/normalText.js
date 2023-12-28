export default {
  title: 'Normal Text',
  name: 'normalText',
  type: 'array',
  of: [
    // of, here, will the the document we want to see inside the array
    {
      title: 'Block',
      type: 'block', // possibly block type here is named after the html tag
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Bolden', value: 'strong' },
          { title: 'Italicize', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
};
