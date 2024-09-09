export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "reference",
            to: [{ type: "project" }],
            // icon: GoFileSymlinkFile,
          },
        ],
      },
    },
  ],
};
