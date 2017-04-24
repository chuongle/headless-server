const { Camden } = require('./connectors');

const resolvers = {
  Query: {
    community(_, args) {
      return Camden.getCommunities(args);
    },
    communities() {
      return Camden.getCommunities();
    },
  },
  Community: {
    title: (community) => community.title,
    nid: (community) => community.nid,
  },
};

module.exports = resolvers;
