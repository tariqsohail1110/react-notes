import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Vist Google</a>
// )

const anotherUser = 'Muhammad'

const reactElement = React.createElement( // injected by babel
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Me to visit Google, ',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement
  // <StrictMode>
  //   <App />
  // </StrictMode>
)
