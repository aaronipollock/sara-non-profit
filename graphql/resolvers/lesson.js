const { Lesson } = require('../../models');

const lessonResolvers = {
    lessons: async () => {
        return await Lesson.find()
    },
    createLesson: async ({ title, description, audioURL }) => {
        const newLesson = new Lesson({ title, description, audioURL });
        return await newLesson.save;
    }
}

module.exports = lessonResolvers;
