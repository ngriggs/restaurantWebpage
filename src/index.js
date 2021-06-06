import {createHeader, backgroundImage} from './pageLoad'
import createContent from  './home'
import createMenu from './menu'
import createContact from './contact'

document.body.appendChild(createHeader())
document.body.appendChild(backgroundImage())
document.body.appendChild(createContent())
document.body.appendChild(createMenu())
document.body.appendChild(createContact())