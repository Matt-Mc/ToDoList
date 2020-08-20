import createTask from './Task'

class createProject {
    constructor(Title, currentTasks) {
        this.Title = Title;
        this.currentTasks = currentTasks;
    }

    createNewTask(Title, Date, Description, Urgency){
        let newTask = new createTask(Title, Date, Description, Urgency);
        this.currentTasks.push(newTask);

    };
}



module.exports = createProject;