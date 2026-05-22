function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(domElement);
    */

    // version 2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const reactHeading = {
    type: 'h1',
    props: {

    },
    children: 'Hello World'
}

const reactButton = {
    type: 'button',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Google'
}
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
customRender(reactHeading, mainContainer);
customRender(reactButton, mainContainer);