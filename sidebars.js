module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Runlet',
      collapsed: false,
      items: ['getting-started'],
    },
    {
      type: 'category',
      label: 'CLI',
      collapsed: false,
      items: ['cli/config', 'cli/run', 'cli/signin', 'cli/signout'],
    },
    {
      type: 'category',
      label: 'Jobs',
      collapsed: false,
      items: [
        'job/definition',
        'job/device_assignment',
        'job/arguments',
        'job/scheduling',
        'job/settings',
      ],
    },
  ],
};
