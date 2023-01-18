import express from 'express';

import { getConversations, createConversation, getConversationById } from '../controllers/conversations.js';

const router = express.Router();

router.get('/', getConversations);
router.post('/', createConversation);
router.get('/:id', getConversationById);

export default router;