const { User } = require('../../models');

const userResolvers = {
    users: async () => {
        return await User.find();
    },
    createUser: async ({ name, email, password }) => {
        const newUser = new User({ name, email, password });
        return await newUser.save();
    },
};

module.exports = userResolvers;
