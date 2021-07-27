import React from 'react';
import Portal from './PortalWithHooks';
import styles from './Modal.module.css'


export default function Modal({children, on, toggle}) {

  return (
    <Portal>
      {on && <div className={styles["modal-wrapper"]}>
        <button onClick={toggle}>Close</button>
        <div>
          {children}
        </div>
      </div>}
    </Portal>
  )
}

