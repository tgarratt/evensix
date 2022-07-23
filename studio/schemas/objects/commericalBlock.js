export default {
    name: "commerical",
    type: "object",
    title: "Commerical",
    fields: [
        {
            name: 'blockHeading',
            type: 'string',
            title: 'Block Heading',
            initialValue: 'Commerical Block'
        },
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        name: 'tagline',
        type: 'string',
        title: 'Tagline'
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