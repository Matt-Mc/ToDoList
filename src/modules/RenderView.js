module.exports = function RenderView(){
    let container = document.getElementById("Content");

    let projectContainer  = document.createElement("div");
    projectContainer.setAttribute('class','projectContainer')



    let projectHolder = document.createElement("div")
    projectHolder.setAttribute('class','projectHolder')

    let projectItemHolder = document.createElement("div")
    projectItemHolder.setAttribute('class','projectItemHolder')


    let projectTitle = document.createElement("h1");
    projectTitle.setAttribute('class','projectTitle');
    projectTitle.innerHTML = "Projects"

    let projectAdd = document.createElement("button");
    projectAdd.setAttribute('class','projectAdd');
    projectAdd.setAttribute('id','projectAdd');
    projectAdd.innerHTML = "+"



    projectHolder.appendChild(projectTitle);
    projectHolder.appendChild(projectAdd);
    projectContainer.appendChild(projectHolder);
    projectContainer.appendChild(projectItemHolder);
    container.appendChild(projectContainer)

    let taskContainer  = document.createElement("div");
    taskContainer.setAttribute('class','taskContainer')

    let taskTitle = document.createElement("h1");
    taskTitle.setAttribute('class','taskTitle');
    taskTitle.innerHTML = "Tasks"

    taskContainer.appendChild(taskTitle)
    container.appendChild(taskContainer)
}
