const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    audioURL: {
        type: String,
        required: true,
    },
}, { timestamp: true });

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
