const { makeExecutableSchema } = require('@graphql-tools/schema');
const User = require('./types/User');
const Lesson = require('./types/Lesson');
const Query = require('./queries/Query');
const Mutation = require('./mutations/Mutation');

const typeDefs = `
    ${User}
    ${Lesson}
    ${Query}
    ${Mutation}`
;

const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
