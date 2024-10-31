const { makeExecutableSchema } = require('@graphql-tools/schema');
const User = require('.types/User');
const Lesson = require('.types/Lesson');
const Query = require('.types/Query');
const Mutation = require('.types/Mutation');

const typeDefs =
    ${Use}
    ${Lesson}
    ${Query}
    ${Mutation}
;

const schema = makeExecutableSchema({ typeDefs });

module.exports = schema;
