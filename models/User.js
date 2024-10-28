const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    completedLessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
    }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.export = User;
