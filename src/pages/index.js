import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const query = graphql`
	query {
		allDataJson {
			nodes {
				products {
					brand
					category
					description
					price
					thumbnail
					id
				}
			}
		}
	}
`;

const IndexPage = () => {
	const data = useStaticQuery(query);
	console.log(data);
	return <h1>Hello World</h1>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
