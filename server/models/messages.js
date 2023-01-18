import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    id: { type: String },
    sentBy: { type: String, required: true },
    content: { type: String, required: true },
    conversationId: { type: String, required: true },
    timestamp: { type: Date, required: true }
});

export default mongoose.model('Message', messageSchema);