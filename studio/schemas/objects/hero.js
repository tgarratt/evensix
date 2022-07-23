export default {
    name: "hero",
    type: "object",
    title: "Hero",
    fields: [
        {
            name: 'blockHeading',
            type: 'string',
            title: 'Block Heading',
            initialValue: 'Hero Info'
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
    ]
  }