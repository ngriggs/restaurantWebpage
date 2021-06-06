import {createHeader, backgroundImage} from './pageLoad'
import createContent from  './home'
import createMenu from './menu'
import createContact from './contact'
import createAbout from './about'

const mainContent = document.createElement('div')
mainContent.setAttribute('class', 'content')
document.body.appendChild(mainContent)
mainContent.appendChild(createHeader());
mainContent.appendChild(backgroundImage());
mainContent.appendChild(createContent());



const homeController = document.getElementById('mainHome');
const menuController = document.getElementById('mainMenu');
const aboutController = document.getElementById('mainAbout');
const contactController = document.getElementById('mainContact');

menuController.addEventListener('click', () => {
    const subContent = document.querySelector('.subContent')
    subContent.querySelectorAll('*').forEach(n => n.remove());
    subContent.remove()
    mainContent.appendChild(createMenu())
});
homeController.addEventListener('click', () => {
    const subContent = document.querySelector('.subContent')
    subContent.querySelectorAll('*').forEach(n => n.remove());
    subContent.remove()
    mainContent.appendChild(createContent())

});
aboutController.addEventListener('click', () => {
    const subContent = document.querySelector('.subContent')
    subContent.querySelectorAll('*').forEach(n => n.remove());
    subContent.remove()
    mainContent.appendChild(createAbout())

});
contactController.addEventListener('click', () => {
    const subContent = document.querySelector('.subContent')
    subContent.querySelectorAll('*').forEach(n => n.remove());
    subContent.remove()
    mainContent.appendChild(createContact())
});
