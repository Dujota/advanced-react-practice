import React from 'react';
import Portal from './PortalWithHooks';
import styles from './Modal.module.css'


export default function Modal({children}) {

  return (
    <Portal>
      <div className={styles["modal-wrapper"]}>
        {children}
      </div>
    </Portal>
  )
}

