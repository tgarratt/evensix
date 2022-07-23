export default {
    name: "logo",
    type: "object",
    title: "Logo",
    fields: [
        {
            name: 'blockHeading',
            type: 'string',
            title: 'Block Heading',
            initialValue: 'Nav Logo'
        },
        {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ]
      }
    ]
  }