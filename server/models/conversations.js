import mongoose from 'mongoose';
const { Schema } = mongoose;

const conversationSchema = new Schema({
    id: { type: String },
    participants: [{ type: String, required: true }]
});

export default mongoose.model('Conversation', conversationSchema);