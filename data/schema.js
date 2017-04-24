const typeDefs = `
type Community {
	nid: Int!
	title: String
}

type Query {
  community(nid: Int): Community
  communities: [Community]
}

schema {
	query: Query
}
`;

export default [typeDefs];
