const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
