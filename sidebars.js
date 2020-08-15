module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
    },
    {
      type: "category",
      label: "CLI",
      collapsed: false,
      items: ["cli/config", "cli/run", "cli/signin", "cli/signout"],
    },
    {
      type: "category",
      label: "Jobs",
      collapsed: false,
      items: [
        "job/definition",
        "job/device_assignment",
        "job/arguments",
        "job/scheduling",
        "job/settings",
      ],
    },
    {
      type: "category",
      label: "Policies",
      collapsed: false,
      items: ["policies/terms", "policies/privacy"],
    },
  ],
};
