const lessons = []

const resolvers = {
    lessons: () => {
        return lessons;
    },
    createLesson: ({ title, description, audioURL }) => {
        const lesson = { id: lessons.length + 1, title, description, audioURL };
        lessons.push(lesson);
        return lesson;
    }
}

module.exports = resolvers;
