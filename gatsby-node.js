const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPost = path.resolve(`./src/templates/blog-post.js`);
	return graphql(
		`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}

		// Create blog posts pages.
		const posts = result.data.allMarkdownRemark.edges;

		createPaginatedPages({
			edges: posts,
			createPage: createPage,
			pageTemplate: 'src/templates/archive.js',
			pageLength: 10, // This is optional and defaults to 10 if not used
			pathPrefix: 'archive', // This is optional and defaults to an empty string if not used
			buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`
		});

		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node;

			createPage({
				path: post.node.fields.slug,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next
				}
			});
		});

		return null;
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value
		});
	}
};
