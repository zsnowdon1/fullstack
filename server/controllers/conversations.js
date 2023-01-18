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
    const post = req.body;

    const newConversation = new Conversation(post);
    
    try {
        await newConversation.save();
        res.status(201).json(newConversation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};