const { User } = require('../../models');

const userResolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
    },
    Mutation: {
        createUser: async ({ name, email, password }) => {
            try {
                const newUser = new User({ name, email, password });
                return await newUser.save();
            } catch (erro) {
                console.error("Error creating user:", error);
                throw new Error("Failed to create user");
            }
        },
    }
};

module.exports = userResolvers;
