exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            id
            image
          }
        }
      }
    }
  `);

  if (data.errors) {
    console.log("Error retrieving data", data.errors);
    return;
  }

  const productsPage = require.resolve("./src/templates/page.js");

  data.data.allProductsJson.edges.forEach((part) => {
    createPage({
      path: `/product/${part.node.id}/`,
      component: productsPage,
      context: {
        id: part.node.id,
      },
    });
  });
};
