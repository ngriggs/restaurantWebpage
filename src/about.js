const createAbout = () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'subContent')
    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'textHeader')
    headerDiv.innerHTML = '<h1>This is who we are and what we do</h1>';

    const textDiv = document.createElement('div')
    textDiv.setAttribute('class', 'textDiv')
    textDiv.innerHTML += '<h2>These are our hours:</h2>'

    textDiv.innerHTML += '<li>Monday: 9 AM to 5 PM</li>'
    textDiv.innerHTML += '<li>Tuesday: 9 AM to 5 PM</li>'
    textDiv.innerHTML += '<li>Wednesday: 9 AM to 5 PM</li>'
    textDiv.innerHTML += '<li>Thursday: 9 AM to 5 PM</li>'
    textDiv.innerHTML += '<li>Friday: 9 AM to 5 PM</li>'
    textDiv.innerHTML += '<li>Saturday and Sunday: 12 PM to 8 PM</li>'



    element.appendChild(headerDiv);
    headerDiv.appendChild(textDiv)
    return element
}
export default createAbout;