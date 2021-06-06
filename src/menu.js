const createMenu = () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'subContent')
    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'textHeader')
    headerDiv.innerHTML = '<h1>This is my Menu</h1>';

    const textDiv = document.createElement('div')
    textDiv.setAttribute('class', 'textDiv')

    textDiv.innerHTML += '<li>Menu item 1</li>';
    textDiv.innerHTML += '<li>Menu item 2</li>';
    textDiv.innerHTML += '<li>Menu item 3</li>';
    textDiv.innerHTML += '<li>Menu item 4</li>';

    element.appendChild(headerDiv);
    headerDiv.appendChild(textDiv)
    return element
}

export default createMenu