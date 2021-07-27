import { useEffect } from 'react'
import ReactDOM from 'react-dom'

/**
 * setup a div on the html file that is rendering the app.
 * select that element and save in variable
 *
 * Creating portal:
 * 1 - Portal component returns ReactDOM.createPortal
 * 2 - create portal requires 2 arguments, children, wrapping element
 * 3 - pull children from props & create a wrapping element with js doc.createElement
 * 4 - need to insert the new element in the dom at the point the portal mounts ( root.appendChild(el) )
 * 5 - remove the element when it unmounts --> portalRoot.removeChild(el)
 */


const portalRoot = document.getElementById('portal')
const el = document.createElement('div')

export default function Portal({children}) {
useEffect(() => {
  portalRoot.appendChild(el)
  return () => {
    portalRoot.removeChild(el)
  }
}, [])


  // We just return the createPortal function with our new element in the DOM
  return ReactDOM.createPortal(children, el)

}

