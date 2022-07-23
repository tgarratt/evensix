export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'logo' },
        { type: 'hero' },
        { type: 'commerical'},
        { type: 'tourers'}
        ]
    }
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}
