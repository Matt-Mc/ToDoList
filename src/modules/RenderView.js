module.exports = function RenderView(){
    let container = document.getElementById("Content");

    let projectContainer  = document.createElement("div");
    projectContainer.setAttribute('class','projectContainer')
    container.appendChild(projectContainer)

    let taskContainer  = document.createElement("div");
    taskContainer.setAttribute('class','taskContainer')
    container.appendChild(taskContainer)
}
