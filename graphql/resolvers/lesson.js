const { Lesson } = require('../../models');
// const { uploadToS3 } = require('../../utils/awsUploader');

const lessonResolvers = {
    Query: {
        lessons: async () => {
            return await Lesson.find();
        },
    },
    Mutation: {
        createLesson: async ( parent, args ) => {
            try {

                const { title, description, audioURL } = args;

                // const audioURL = await uploadToS3(null);
                console.log("Attempting to create a new lesson...");
                const newLesson = new Lesson({ title, description, audioURL });
                const savedLesson = await newLesson.save()

                console.log("Lesson created successfully:", savedLesson);
                return savedLesson;
            } catch (error) {
                console.error("Error creating lesson:", error);
                throw new Error("Failed to create lesson");
            }
        }
    }
};

module.exports = lessonResolvers;
