const { User, Lesson } = require('../models');

const resolvers = {
    users: async () => {
        return await User.find();
    },
    lessons: async () => {
        return await Lesson.find()
    },
    createUser: async ({ name, email, password }) => {
        const newUser = new User({ name, email, password });
        return await newUser.save();
    },
    createLesson: async ({ title, description, audioURL }) => {
        const newLesson = new Lesson({ title, description, audioURL });
        return await newLesson.save;
    }
}

module.exports = resolvers;
