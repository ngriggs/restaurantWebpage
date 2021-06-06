const createHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    const logo = document.createElement('a');
    logo.innerText = 'Company Logo'
    logo.setAttribute('href', '#');
    const headerRight = document.createElement('div');
    headerRight.setAttribute('class', 'headerRight');
    const menu = document.createElement('a');
    menu.innerText = 'Menu';
    menu.setAttribute('href', '#');
    const about = document.createElement('a');
    about.innerText = 'About';
    about.setAttribute('href', '#');
    const contact = document.createElement('a');
    contact.innerText = 'Contact Us';
    contact.setAttribute('href', '#')
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