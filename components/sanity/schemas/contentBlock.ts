export default {
  name: 'contentBlock',
  title: 'Content Block',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Heading 5', value: 'h5' },
        { title: 'Heading 6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Left', value: 'left' },
        { title: 'Center', value: 'center' },
        { title: 'Right', value: 'right' },
        { title: 'Justify', value: 'justify' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strikethrough', value: 'strike-through' },
          { title: 'Superscript', value: 'sup' },
          { title: 'Subscript', value: 'sub' },
          { title: 'Highlight', value: 'highlight' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              { name: 'internal', type: 'boolean', title: 'Internal Link' },
            ],
          },
        ],
      },
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
    },
    {
      type: 'object',
      name: 'textDirection',
      title: 'Text Direction',
      fields: [
        {
          name: 'direction',
          type: 'string',
          options: {
            list: [
              { title: 'LTR', value: 'ltr' },
              { title: 'RTL', value: 'rtl' },
            ],
          },
        },
      ],
    },
  ],
}