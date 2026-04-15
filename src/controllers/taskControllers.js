const taskServices = require('../services/taskServices');

const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        
        req.on('data', chunk => { 
        });

        req.on('end', () => { 
            resolve(JSON.parse(body)); 
        });
    });
};

const createTask = async (req, res) => {
    const body = await getRequestBody(req);
    const task = taskServices.addTask(body.title);

    res.statusCode = 201;
    res.end(JSON.stringify(task));
};

const listTasks = (req, res) => {
    const tasks = taskServices.getTasks();

    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
};

const updateTask = async (req, res, id) => {
    const body = await getRequestBody(req);

    const task = taskServices.updateTask(id, body.title);

    if(!task) {
        res.statusCode = 404;
        return res.end (JSON.stringify(
            { mensage: 'Não encontrada'})
        );
    }

    res.end(JSON.stringify(task));
};

const deleteTask = (req, res, id) => {
    const sucess = taskServices.deleteTask(id);

    if(!sucess) {
        res.statusCode = 404;
        return res.end (JSON.stringify(
            { mensagem: 'Não encontrada'})
        );
    }
    res.end(JSON.stringify({ mensage: 'Removida' }));
};

const updateTaskCompleted = async (req, res, id) => {
    const body = await getRequestBody(req);

    const task = taskServices.updateTaskCompleted(id, body.completed);

    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ mensagem: 'Não encontrada' }));
    }

    res.end(JSON.stringify(task));
};

const getTaskById = (req, res, id) => {
    const task = taskServices.getTaskById(id);

    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ mensagem: 'Tarefa não encontrada' }));
    }

    res.end(JSON.stringify(task));
};

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask,
    updateTaskCompleted,
    getTaskById
}