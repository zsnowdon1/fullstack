import express from 'express';

import { getMessages, createMessage } from '../controllers/messages.js';

const router = express.Router();

// localhost:5000/posts
router.get('/', getMessages);
router.post('/', createMessage);
//router.get('/:id', getPost);

export default router;