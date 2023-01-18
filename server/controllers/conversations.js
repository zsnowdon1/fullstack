import Conversation from "../models/conversations.js";

export const getConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find();
        console.log(conversations);
        res.status(200).json(conversations);
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