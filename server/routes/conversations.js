import express from 'express';

import { getConversations, createConversation } from '../controllers/conversations.js';

const router = express.Router();

// localhost:5000/posts
router.get('/', getConversations);
router.post('/', createConversation);
//router.get('/:id', getPost);

export default router;