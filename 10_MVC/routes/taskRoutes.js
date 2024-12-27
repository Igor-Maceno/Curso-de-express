const express = require('express');
const router = express.Router();

const TaskControler = require('../controllers/TaskController');

router.get('/add', TaskControler.createTask)
router.post('/add', TaskControler.createTaskSave)
router.post('/remove', TaskControler.removeTask)
router.get('/edit/:id', TaskControler.updateTask)
router.post('/edit', TaskControler.updateTaskPost)
router.post('/updatestatus', TaskControler.toggleTaskStatus)
router.get('/', TaskControler.showTasks)

module.exports = router