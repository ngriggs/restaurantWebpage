const createMenu = () => {
    const element = document.createElement('div')
    element.setAttribute('class', 'content')
    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'textHeader')
    headerDiv.innerHTML = '<h1>This is my Menu</h1>';

    const textDiv = document.createElement('div')
    textDiv.setAttribute('class', 'textDiv')

    textDiv.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien dui, vehicula ut porttitor nec, gravida non ante. Nam et neque nulla. Nulla eu hendrerit odio. Morbi gravida ac quam in lacinia. Etiam ac erat mattis, fringilla turpis non, tincidunt lorem. Proin eget condimentum nunc. Phasellus mollis facilisis augue, eget pharetra nisi maximus in. Nulla sagittis enim vitae massa laoreet, eu placerat sapien vehicula. Maecenas dapibus porta erat eu bibendum. Vivamus volutpat, metus quis mattis ullamcorper, elit ante faucibus nulla, id auctor neque eros at elit.</p>';

    textDiv.innerHTML += '<p>Phasellus rutrum facilisis nibh, vel dignissim neque cursus pretium. Curabitur ultrices varius mollis. Vivamus lobortis nisl eget eros tristique convallis. Cras posuere sollicitudin ullamcorper. Aliquam erat volutpat. Fusce eget orci et turpis feugiat semper a nec metus. Pellentesque molestie erat maximus fringilla vulputate. Sed vulputate ipsum odio, euismod varius sem faucibus convallis. Cras faucibus tincidunt interdum.</p>'

    textDiv.innerHTML += '<p>Donec accumsan a diam id faucibus. Quisque aliquet bibendum gravida. Morbi elit dolor, vehicula nec mauris blandit, interdum sagittis purus. Quisque non lorem eros. Donec et dolor non quam ultrices mattis. Proin et volutpat leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur non erat leo. Nam sagittis molestie mauris, eu pretium neque porta ac. Nam porttitor, dolor eget convallis fringilla, lorem leo condimentum nisl, a auctor justo nisi sit amet elit. Curabitur leo mi, laoreet ut placerat sit amet, faucibus sed lorem. Vivamus vitae efficitur diam.</p>'

    textDiv.innerHTML +='<p>Duis fringilla sit amet ipsum a consectetur. Vestibulum blandit tempor nulla, in pharetra mauris rhoncus ac. Curabitur gravida risus quis nisl sodales, in hendrerit ipsum cursus. Nunc fermentum libero eu semper rhoncus. Aenean gravida congue accumsan. Quisque diam urna, consectetur eu felis in, faucibus rutrum lorem. Curabitur nibh eros, pellentesque at porttitor eget, tincidunt eu nisi. Nam dictum tortor maximus lacus condimentum volutpat dictum sed ante.</p>'

    element.appendChild(headerDiv);
    headerDiv.appendChild(textDiv)
    return element
}

export default createMenu