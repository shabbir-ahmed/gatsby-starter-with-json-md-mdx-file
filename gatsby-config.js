/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `practice`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		// "gatsby-plugin-google-gtag",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [".mdx", ".md"],
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		`gatsby-transformer-json`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: `${__dirname}/src/data/`,
			},
			__key: "data",
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
			},
		},
	],
};
