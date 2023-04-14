const express = require('express');
const { getNotes, updateNote, deleteNote, createNote, getNoteById } = require('../controllers/noteController');
const auth = require('../middlewares/auth');

const noteRouter = express.Router();

noteRouter.get('/', auth, getNotes)

noteRouter.post('/', auth, createNote)

noteRouter.put('/:id', auth, updateNote)

noteRouter.delete('/:id', auth, deleteNote)

noteRouter.get('/:id', auth, getNoteById)





module.exports = noteRouter;