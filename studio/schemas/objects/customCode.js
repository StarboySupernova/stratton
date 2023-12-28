// "@sanity/code-input": "^2.27.0", // we use this package in package.json to create customCode object
import { MdCode } from 'react-icons/md';

export default {
  name: 'customCode',
  title: 'Code',
  type: 'object',
  icon: MdCode,
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code', // code coming from "@sanity/code-input": "^2.27.0"
    },
  ],
  preview: {
    select: {
      title: 'code.code',
    },
  },
};
