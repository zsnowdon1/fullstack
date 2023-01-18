import conversations from "../models/conversations.js";
import Conversation from "../models/conversations.js";
import Messages from "../models/messages.js";

export const getConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find();
        res.status(200).json(conversations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getConversationById = async (req, res) => {
    const { id } = req.params;
    try {
        const conversations = await Conversation.findById(id);
        const messages = await Messages.find({conversationId: id});
        res.status(200).json({conversation: conversations, messages: messages});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createConversation = async (req, res) => {
    const conversation = req.body.conversation;
    const message = req.body.message;

    const newConversation = new Conversation(conversation);
    
    try {
        await newConversation.save();
        message.conversationId = newConversation._id;
        const newMessage = new Messages(message);
        await newMessage.save();
        res.status(201).json({conversation: newConversation, message: newMessage});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};