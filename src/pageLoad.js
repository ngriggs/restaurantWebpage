const createHeader = () => {
    const header = document.createElement('header');
    header.setAttribute('class', 'header');
    const logo = document.createElement('div');
    logo.innerText = 'Company Logo'
    logo.setAttribute('id', 'mainHome')
    const headerRight = document.createElement('nav');
    headerRight.setAttribute('class', 'headerRight');
    const menu = document.createElement('div');
    menu.innerText = 'Menu';
    menu.setAttribute('id', 'mainMenu');
    const about = document.createElement('div');
    about.innerText = 'About';
    about.setAttribute('id', 'mainAbout');
    const contact = document.createElement('div');
    contact.innerText = 'Contact Us';
    contact.setAttribute('id', 'mainContact');
    header.appendChild(logo);
    header.appendChild(headerRight);
    headerRight.appendChild(menu)
    headerRight.appendChild(about);
    headerRight.appendChild(contact);
    return header;
}
const backgroundImage = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'backgroundImage');
    return element;
}

export {
    createHeader,
    backgroundImage
}