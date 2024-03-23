/* creating pages programmatically instead of creating them in files isnde the Pages folder */
exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 3;
  // resolving templates paths
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const singleServiceTemplate = require.resolve(
    './src/templates/single-service.js'
  );
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const serviceListTemplate = require.resolve(
    './src/templates/service-list.js'
  );
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');

  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityService {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;
  const categories = result.data.allSanityCategory.nodes;
  const authors = result.data.allSanityAuthor.nodes;
  const services = result.data.allSanityService.nodes;

  // creating single blog pages
  blogs.forEach((blog) => {
    createPage({
      path: `/spotlight/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // creating single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  // single Author pages
  authors.forEach((author) => {
    createPage({
      path: `/team/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  //  creating single service pages
  services.forEach((service) => {
    createPage({
      path: `/tech/${service.slug.current}`,
      component: singleServiceTemplate,
      context: { id: service.id },
    });
  });

  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/spotlight` : `/spotlight/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // category paginated pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/categories` : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // Author paginated pages
  const totalAuthorListPages = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/team` : `/team/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });

  // service paginated pages
  const totalServiceListPages = Math.ceil(services.length / 7);
  Array.from({ length: totalServiceListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/tech` : `/tech/${index + 1}`,
      component: serviceListTemplate,
      context: {
        limit: 7,
        offset: index * 7,
        numberOfPages: totalServiceListPages,
        currentPage: index + 1,
      },
    });
  });
};
