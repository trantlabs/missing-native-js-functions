// @ts-nocheck

try {
	require("fs").mkdirSync(__dirname + "/docs", { recursive: true });
} catch (error) {}

const entryPoints = require("fs")
	.readdirSync(__dirname + "/src")
	.map((x) => __dirname + "/src/" + x);

const organizationName = "trantlabs";
const projectName = "missing-native-js-functions";
const githubUrl = `https://github.com/${organizationName}/${projectName}`;

/** @type {import('typedoc').TypeDocOptions} */
const typedoc = {
	tsconfig: __dirname + "/tsconfig.json",
	entryPoints: entryPoints,
	out: __dirname + "/docs/",
	watch: process.env.TYPEDOC_WATCH,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Missing Native JS Functions",
	tagline: "A zero-dependecy JavaScript utility library delivering missing native functions 💼",
	url: `https://${organizationName}.github.io/`,
	organizationName,
	projectName,
	deploymentBranch: "gh-pages",
	baseUrl: `/${projectName}/`,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	organizationName: "trantlabs",
	projectName: "missing-native-js-functions",
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					path: "./docs/",
					routeBasePath: "/",
					editUrl: `${githubUrl}/edit/master/website`,
				},
			},
		],
	],
	plugins: [["docusaurus-plugin-typedoc", typedoc]],
	themeConfig: {
		navbar: {},
	},
};

module.exports = config;
