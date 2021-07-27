import { useEffect, useRef } from 'react'
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



/**
 * @prop {this hook should be moved to its own file}
 */


/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */

function usePortal(id) {
  const portalRootRef = useRef(null)

  useEffect(() => {
    const portalRoot = document.getElementById('portal');

    portalRoot.appendChild(portalRootRef.current)

    return () => {
      portalRootRef.current.remove()
    }
  }, [id])


  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */

  function getPortalRootElem () {
    if (portalRootRef.current === null) {
      portalRootRef.current = document.createElement('div')
    }
    return portalRootRef.current
  }

  return getPortalRootElem()
}


export default function Portal({children}) {

  const el = usePortal('portal')
  // We just return the createPortal function with our new element in the DOM
  if(el){
    return ReactDOM.createPortal(children, el)
  }
  return null
}

