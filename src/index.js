const createHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    const logo = document.createElement('a');
    logo.innerText = 'CompanyLogo'
    logo.setAttribute('href', '#');
    const headerRight = document.createElement('div');
    headerRight.setAttribute('class', 'headerRight');
    const about = document.createElement('a');
    about.innerText = 'About';
    about.setAttribute('href', '#');
    const contact = document.createElement('a');
    contact.innerText = 'Contact Us';
    contact.setAttribute('href', '#')
    header.appendChild(logo);
    header.appendChild(headerRight);
    headerRight.appendChild(about);
    headerRight.appendChild(contact);
    return header;
  }
const backgroundImage = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'backgroundImage');
    return element;
}



  document.body.appendChild(createHeader())
  document.body.appendChild(backgroundImage())