import renderView from './modules/RenderView';
import createProject from './modules/Project';

renderView();
let projectAdd = document.querySelector("#projectAdd");
const modelClose = document.querySelectorAll("#ModalClose")
const submitButton = document.querySelector("#Submit")



let defaultProject = new createProject('Default');
defaultProject.createNewTask('Default Tasks', 'Today', 'a task to do today', '4')



console.log(defaultProject)


projectAdd.addEventListener('click', (e) => {
    const modalproject = document.querySelector('#myModalProject');
    modalproject.style.display ="block";
});


modelClose.forEach(button => {
    button.addEventListener('click', (e) => {
        const modalproject = document.querySelector("#myModalProject")
        modalproject.style.display = "none";
        const modaltask = document.querySelector("#myModalTask")
        modaltask.style.display = "none";
    });
});

submitButton.addEventListener('click', (e) => {
    const modal = document.querySelector("#myModalProject")
    modal.style.display = "none";
    addBookToLibrary()
})



