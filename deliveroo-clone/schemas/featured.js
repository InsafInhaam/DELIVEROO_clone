export default {
  name: "featuered",
  title: "Featuered",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featuered Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
