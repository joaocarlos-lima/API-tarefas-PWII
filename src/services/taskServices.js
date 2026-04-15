const { createTask } = require('../models/taskModel'); 

let tasks = [

];

let idCounter = 1;

const addTask = (title) => {
    const task = createTask(idCounter++, title); 
    tasks.push(task); 
    return task;
};

const getTasks = () => tasks; 

const updateTask = (id, title) => {
    const task = tasks.find(t => t.id == id); 
    if(!task) return null;

    task.title = title; 
    return task;
}

const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id == id);

    if (index == -1) return false;

    tasks.splice(index, 1);
    return true;
};

const updateTaskCompleted = (id, completed) => {
    const task = tasks.find(t => t.id == id);
    if (!task) return null;

    task.completed = completed; 
    return task;
};

const getTaskById = (id) => {
    return tasks.find(t => t.id == id) || null;
};


module.exports = {
    addTask,
    getTasks, 
    updateTask,
    deleteTask,
    updateTaskCompleted,
    getTaskById
};